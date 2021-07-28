import * as Types from "./../constants/ActionTypes";
var initialState = [];

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_PRODUCT:
      state = action.products;
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
