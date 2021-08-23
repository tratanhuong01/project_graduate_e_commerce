import * as Types from "../constants/ActionTypes";

const initialState = {
  list: [],
  money: 0,
  voucher: null,
  sale: 0,
};

const myReducer = (state = initialState, action) => {
  let sum = 0;
  switch (action.type) {
    case Types.LOAD_ORDER:
      action.orders.forEach((element) => {
        sum +=
          element.priceOutput * ((100 - element.sale) / 100) * element.amount;
      });
      state.money = sum;
      state.list = action.orders;
      return { ...state };
    case Types.LOAD_MONEY_ORDER:
      action.orders.forEach((element) => {
        sum +=
          element.priceOutput * ((100 - element.sale) / 100) * element.amount;
      });
      state.money = sum;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
