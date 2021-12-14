import * as Types from "../../constants/ActionTypes";
import * as productApi from "../../api/productApi";
import * as billApi from "../../api/billApi";
import api from "../../Utils/api";
import * as addressApi from "../../api/addressApi";
import { IMAGE_BILL_CREATED } from "../../constants/Config";
import * as profileApi from "../../api/profileApi";

export const loadOrder = (orders) => {
  return {
    type: Types.LOAD_ORDER,
    orders,
  };
};

export const loadMoneyOrder = (orders) => {
  return {
    type: Types.LOAD_MONEY_ORDER,
    orders,
  };
};

export const loadInfoAddressPayment = (address, email) => {
  return {
    type: Types.LOAD_INFO_ADDRESS_PAYMENT,
    address,
    email,
  };
};

export const loadInfoUserPayment = (user) => {
  return {
    type: Types.LOAD_INFO_USER_PAYMENT,
    user,
  };
};

export const updateAddressPayment = (item, index) => {
  return {
    type: Types.UPDATE_ADDRESS_PAYMENT,
    item,
    index,
  };
};

export const checkOrderIsOutOfStockRequest = (carts, headers) => {
  return async (dispatch) => {
    let count = 0;
    let orders = [];
    try {
      for (let index = 0; index < carts.length; index++) {
        const element = carts[index];
        const result = await productApi.getItemCurrentByIdProduct(
          element.idProduct,
          headers
        );
        if (element.amount > 5 || element.amount > result.data) {
          count++;
          orders.push({
            item: element,
            itemCurrent: result.data <= 5 ? result.data : 5,
          });
        }
      }
      if (count > 0) dispatch(checkOrderIsOutOfStock(orders));
      else dispatch(checkOrderIsOutOfStock([]));
    } catch (error) {
      throw error;
    }
  };
};

export const checkOrderIsOutOfStock = (orders) => {
  return {
    type: Types.CHECK_ORDERS_IS_OUT_OF_STOCK,
    orders,
  };
};

export const updateOrderIsOutOfStock = (list) => {
  return {
    type: Types.UPDATE_ORDER_IS_OUT_OF_STOCK,
    list,
  };
};

export const updateVoucherOrders = (voucher, remove) => {
  return {
    type: Types.UPDATE_VOUCHER_ORDERS,
    voucher,
    remove,
  };
};

export const addOrderRequest = (data, headers) => {
  return async (dispatch) => {
    dispatch({ type: Types.ON_LOADING_MODAL })
    dispatch({ type: Types.ORDER_SUCCESS });
    let user = null;
    const timeIntend = () => {
      if (data.deliveryTime) {
        const deliveryTime = data.deliveryTime.split("/");
        if (deliveryTime.length === 3) {
          return `${data.deliveryTime.replaceAll('/', '-')} 00:00:00`;
        }
      }
      return null;
    }
    if (!data.user)
      user = await api(`users`, "POST", {
        id: null,
        firstName: "",
        lastName: "",
        phone: null,
        email: null,
        sex: null,
        birthday: "1999-01-01 00:00:00",
        password: 1,
        avatar: null,
        type: 0,
        userRole: {
          id: "CUSTOMER",
          nameRole: "Khách hàng",
          typeRole: 0,
          timeCreated: "10-04-2021 08:05:05",
        },
        codeEmail: null,
        codePhone: null,
        isVerifyEmail: 0,
        isVerifyPhone: 0,
        timeCreated: null,
        status: data.user ? 0 : -3,
        isRegister: 0,
      });
    const order = await billApi.addBill(
      {
        id: null,
        billUser: data.user ? data.user : user.data,
        status: data.user ? 0 : -3,
        paymentMethodBill: {
          id: 1,
          namePaymentMethod: "Thanh toán khi nhận hàng",
          typePaymentMethod: 0,
          isShow: 0,
        },
        fullName: data.infoPayment.fullName,
        phone: data.infoPayment.phone,
        bank: null,
        address: `${data.infoPayment.address} , ${JSON.parse(data.infoPayment.ward).WardName
          } , ${JSON.parse(data.infoPayment.district).DistrictName} , 
      ${JSON.parse(data.infoPayment.cityProvince).ProvinceName}`,
        note: data.infoPayment.note,
        sale: data.sale,
        fee: data.fee,
        total: data.money + data.fee - data.sale,
        timeCreated: null,
        email: data.infoPayment.email,
        timeCompleted: null,
        timeIntend: timeIntend(),
        timeApproval: null,
        timeCancel: null,
      },
      headers
    );
    for (let index = 0; index < data.list.length; index++) {
      const item = data.list[index];
      const product = await productApi.getProductByIdProduct(
        item.idProduct,
        headers
      );
      await billApi.addBillDetail(
        {
          id: null,
          billDetail: order.data,
          productDetailBill: product.data,
          price: item.priceOutput * ((100 - item.sale) / 100),
          amount: item.amount,
        },
        headers
      );
      await productApi.updateItemCurrentAndItemSold(
        item.amount,
        item.idProduct,
        headers
      );
    }
    if (data.user) {
      await api(
        `notifies`,
        "POST",
        {
          id: null,
          userNotify: data.user,
          nameNotify: "Đơn hàng của bạn đã đặt thành công",
          data: order.data ? order.data.id : null,
          image: IMAGE_BILL_CREATED,
          description: "🌀 Vui lòng chờ cho bên cửa hàng duyệt 🌀",
          timeCreated: null,
          isRead: 0,
        },
        headers
      );
      const generalContent = () => {
        return `${"Tỉnh " + JSON.parse(data.infoPayment.cityProvince).ProvinceName + " , "
          }${JSON.parse(data.infoPayment.district).DistrictName + " , "
          }${JSON.parse(data.infoPayment.ward).WardName}`;
      };
      if (data.addressCount === 0) {
        await profileApi.addAddressByIdUser(
          {
            id: -1,
            addressUser: data.user,
            cityProvince: data.infoPayment.cityProvince,
            district: data.infoPayment.district,
            wards: data.infoPayment.ward,
            details: data.infoPayment.address,
            infoAddress: data.infoPayment.address + " ," + generalContent(),
            statusAddress: 1,
            fullName: data.fullName,
            phone: data.user.phone,
            typeAddress: 0,
            isDefault: 1,
          },
          headers
        );
      }
    }
    else
      await api(
        `sendMailOrders?idBill=${order.data.id}&email=${data.infoPayment.email}`,
        "GET",
        null,
        { "Content-Type": "application/json" }
      );
    if (data.voucher) {
      if (!data.voucher.userDiscountCode) {
        await api('discountCodeUsers', 'POST', {
          discountCode: data.voucher.discountCode,
          id: -1,
          isUsed: 1,
          userDiscountCode: data.user
        }, headers);
      }
      else
        await api(
          `discountCodeUsers/update/isUsed/?idDiscountCode=${data.voucher.id}&idUser=${data.user.id}&isUsed=1`,
          "GET",
          null,
          headers
        );
      let discountCodeData = data.voucher.discountCode
        ? data.voucher.discountCode
        : data.voucher;
      discountCodeData.amount -= 1;
      await api(`discountCodes`, "PUT", discountCodeData, headers);
    }
    dispatch({ type: Types.OFF_LOADING_MODAL })
  };
};

export const calcalatorFeeRequest = (data) => {
  return async (dispatch) => {
    // const { districtFrom, districtTo, serviceID, mode } = data;
    if (data.mode === 0) {
      const result = await addressApi.getSerivce({
        districtTo: data.districtTo,
      });
      dispatch(calcalatorFee(result.data.data, 0));
      if (result.data.data) {
        dispatch(
          calcalatorFeeRequestTwo({
            service: result.data.data[0],
            districtTo: data.districtTo,
            WardCode: data.WardCode,
          })
        );
      }
    }
  };
};

export const calcalatorFeeRequestTwo = (data) => {
  return async (dispatch) => {
    dispatch(calcalatorFee(data.service, 2));
    const resultTwo = await addressApi.calcalatorFee({
      districtTo: data.districtTo,
      ServiceID: data.service.service_id,
      WardCode: data.WardCode,
    });
    const resultOne = await addressApi.calcalatorDeliveryTime({
      districtTo: data.districtTo,
      ServiceID: data.service.service_id,
      WardCode: data.WardCode,
    });
    dispatch(calcalatorFee(resultTwo.data.data.total, 1));
    const timestamp = resultOne.data.data.leadtime;
    const date = new Date(timestamp * 1000);
    const dateArray = date.toLocaleDateString("en-US").split("/");
    dispatch(
      calcalatorFee(
        `${dateArray[1] < 10 ? `0${dateArray[1]}` : dateArray[1]}/${dateArray[0] < 10 ? `0${dateArray[0]}` : dateArray[0]
        }/${dateArray[2]}`,
        3
      )
    );
  };
};

export const calcalatorFee = (data, mode) => {
  return {
    type: Types.UPDATE_FEE_OR_SERVICE_ORDER,
    data,
    mode,
  };
};
