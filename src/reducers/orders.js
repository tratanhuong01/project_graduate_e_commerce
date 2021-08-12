import * as Types from "../constants/ActionTypes";

const initialState = null;

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_ORDER:
      state = action.order;
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
