import * as Types from "../constants/ActionTypes";

const initialState = {
  reviews: null,
  reviewAll: null,
  index: 0,
  active: -1,
  products: null,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_REVIEW_PRODUCT_DATA:
      state.reviews = action.data.reviews;
      state.reviewAll = action.data.reviewAll;
      state.products = action.data.products;
      return { ...state };
    case Types.LOAD_REVIEW_PRODUCT_INDEX_PAGE:
      state.index = action.data.index;
      state.reviews = action.data.reviews;
      return { ...state };
    case Types.LOAD_REVIEW_PRODUCT_ACTIVE_STAR:
      state = action.data;
      return { ...state };
    case Types.ADD_REVIEW_PRODUCT:
      state.reviews = action.data.reviews;
      state.reviewAll = action.data.reviewAll;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
