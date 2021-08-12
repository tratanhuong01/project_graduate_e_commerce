import * as Types from "../constants/ActionTypes";

const initialState = [];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_CART:
      state = action.carts;
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
