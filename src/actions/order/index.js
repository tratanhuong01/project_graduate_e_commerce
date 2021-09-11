import * as Types from "../../constants/ActionTypes";

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
