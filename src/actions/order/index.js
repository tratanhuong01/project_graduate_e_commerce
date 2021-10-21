import * as Types from "../../constants/ActionTypes";
import * as productApi from "../../api/productApi";
import * as billApi from "../../api/billApi";
import api from "../../Utils/api";
import * as addressApi from "../../api/addressApi";

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

export const loadInfoAddressPayment = (address) => {
  return {
    type: Types.LOAD_INFO_ADDRESS_PAYMENT,
    address,
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
    let user = null;
    if (!data.user)
      user = await api(`users`, "POST", {
        id: null,
        firstName: "",
        lastName: "",
        phone: null,
        email: null,
        sex: null,
        birthday: "12-12-1999 00:00:00",
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
        status: 0,
        isRegister: 0,
      });
    const order = await billApi.addBill(
      {
        id: null,
        billUser: data.user ? data.user : user.data,
        status: 0,
        paymentMethodBill: {
          id: 1,
          namePaymentMethod: "Thanh toán khi nhận hàng",
          typePaymentMethod: 0,
          isShow: 0,
        },
        fullName: data.infoPayment.fullName,
        phone: data.infoPayment.phone,
        bank: null,
        address: `${data.infoPayment.address} , ${
          JSON.parse(data.infoPayment.ward).WardName
        } , ${JSON.parse(data.infoPayment.district).DistrictName} , 
      ${JSON.parse(data.infoPayment.cityProvince).ProvinceName}`,
        note: data.infoPayment.note,
        sale: data.sale,
        fee: data.fee,
        total: data.money + data.fee - data.sale,
        timeCreated: null,
        timeCompleted: null,
        timeIntend: null,
        timeApproval: null,
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
          url: null,
          image:
            "https://cf.shopee.vn/file/fed467fc00192be487e1aa69720a432d_tn",
          description: "🌀 Vui lòng chờ cho bên cửa hàng duyệt 🌀",
          timeCreated: null,
          isRead: 0,
        },
        headers
      );
    }
    if (data.voucher) {
      if (data.voucher.discountCode)
        await api(
          `discountCodeUsers/update/isUsed/?idDiscountCode=${data.voucher.discountCode.id}&idUser=${data.voucher.userDiscountCode.id}&isUsed=1`,
          "GET",
          null,
          headers
        );
      else
        await api(
          `discountCodeUsers/update/isUsed/?idDiscountCode=${data.voucher.id}&idUser=${data.user.id}&isUsed=1`,
          "GET",
          null,
          headers
        );
    }
    dispatch({ type: Types.ORDER_SUCCESS });
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
        `${dateArray[1] < 10 ? `0${dateArray[1]}` : dateArray[1]}/${
          dateArray[0] < 10 ? `0${dateArray[0]}` : dateArray[0]
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
