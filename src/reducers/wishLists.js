import * as Types from "../constants/ActionTypes";

const initialState = [];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_WISHLIST:
      state = action.wishLists;
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
