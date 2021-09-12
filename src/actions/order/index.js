import * as Types from "../../constants/ActionTypes";
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
      if (element.amount > 5) {
        count++;
        orders.push(element);
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
    const order = await api("bills", "POST", {
      id: null,
      billUser: data.user,
      status: 0,
      paymentMethodBill: {
        id: 1,
        namePaymentMethod: "Thanh toán khi nhận hàng",
        typePaymentMethod: 0,
        isShow: 0,
      },
      bank: null,
      address: `${data.address.detail} , ${data.address.ward} , ${data.address.district} , 
      ${data.address.cityProvice}`,
      sale: data.sale,
      fee: data.fee,
      total: data.money,
      timeCreated: "09-11-2021 05:45:41",
    });
    for (let index = 0; index < data.orders.length; index++) {
      const item = data.orders[index];
      const product = await api(`products/${item.idProduct}`, "GET", null);
      await api("billDetails", "POST", {
        id: null,
        billDetail: order.data,
        productDetailBill: product.data,
        price: item.priceOutput * ((100 - item.sale) / 100),
        amount: item.amount,
      });
    }
  };
};
