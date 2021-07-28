import * as Types from "../constants/ActionTypes";

var initialState = [];
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SEARCH_PRODUCT:
      const keyword = action.keyword;
      state = action.products.filter((item) => {
        var name = item.NameProduct;
        return name.toLowerCase().indexOf(keyword) !== -1;
      });
      console.log(state, action.keyword, action.products);
      return [...state];
    default:
      return state;
  }
};
export default myReducer;
