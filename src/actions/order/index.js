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
