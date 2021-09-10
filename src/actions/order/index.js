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
