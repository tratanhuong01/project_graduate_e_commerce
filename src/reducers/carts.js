import * as Types from "../constants/ActionTypes";

const initialState = {
  list: [],
  main: [],
  money: 0,
};

const myReducer = (state = initialState, action) => {
  let sum = 0;
  switch (action.type) {
    case Types.LOAD_CART:
      if (action.status !== false)
        action.carts.forEach((element) => {
          sum +=
            element.priceOutput * ((100 - element.sale) / 100) * element.amount;
        });
      state.money = sum;
      state.list = action.carts;
      return { ...state };
    case Types.LOAD_CART_MAIN:
      state.main = action.carts;
      return { ...state };
    case Types.LOAD_MONEY_CART:
      action.carts.forEach((element) => {
        sum +=
          element.priceOutput * ((100 - element.sale) / 100) * element.amount;
      });
      state.money = sum;
      state.main = action.carts;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
