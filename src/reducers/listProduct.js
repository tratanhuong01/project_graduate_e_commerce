import * as Types from "../constants/ActionTypes";

const initialState = {
  products: null,
  filter: "",
  sorter: "",
  search: "",
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_LIST_PRODUCT:
      state.products = action.products;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
