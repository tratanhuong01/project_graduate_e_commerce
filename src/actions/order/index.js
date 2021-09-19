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

export const checkOrderIsOutOfStockRequest = (carts) => {
  return async (dispatch) => {
    let count = 0;
    let orders = [];
    for (let index = 0; index < carts.length; index++) {
      const element = carts[index];
      const result = await productApi.getItemCurrentByIdProduct(
        element.idProduct
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

export const addOrderRequest = (data) => {
  return async (dispatch) => {
    const order = await billApi.addBill({
      id: null,
      billUser: data.user,
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
    });
    for (let index = 0; index < data.list.length; index++) {
      const item = data.list[index];
      const product = await productApi.getProductByIdProduct(item.idProduct);
      billApi.addBillDetail({
        id: null,
        billDetail: order.data,
        productDetailBill: product.data,
        price: item.priceOutput * ((100 - item.sale) / 100),
        amount: item.amount,
      });
      await productApi.updateItemCurrentAndItemSold(
        item.amount,
        item.idProduct
      );
    }
    if (data.voucher) {
      await api(
        `discountCodeUsers/update/isUsed/?idDiscountCode=${data.voucher.discountCode.id}&idUser=${data.voucher.userDiscountCode.id}&isUsed=1`,
        "GET",
        null
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
