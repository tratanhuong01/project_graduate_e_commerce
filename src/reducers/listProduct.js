import * as Types from "../constants/ActionTypes";

const initialState = {
  products: null,
  filters: [],
  sorter: [],
  search: null,
  slug: null,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_LIST_PRODUCT:
      state.products = action.products;
      return { ...state };
    case Types.LOAD_SLUG_CONDITION:
      state.slug = action.slug;
      return { ...state };
    case Types.RESET_FILTER_PRODUCT:
      state.filters = [];
      return { ...state };
    case Types.ADD_FILTER_PRODUCT:
      state.filters = action.data;
      return { ...state };
    case Types.REMOVE_FILTER_PRODUCT:
      state.filters = action.data;
      return { ...state };
    case Types.RESET_ALL_FILTER_SORTER_SEARCH_LIST_PRODUCT:
      state.filters = [];
      state.sorter = [];
      return { ...state };
    case Types.LOADING_LIST_PRODUCT:
      state.products = null;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
