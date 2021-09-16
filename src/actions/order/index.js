import * as Types from "../../constants/ActionTypes";
import * as productApi from "../../api/productApi";
import * as billApi from "../../api/billApi";
import api from "../../Utils/api";

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
      address: `${data.infoPayment.address} , ${data.infoPayment.ward} , ${data.infoPayment.district} , 
      ${data.infoPayment.cityProvince}`,
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
