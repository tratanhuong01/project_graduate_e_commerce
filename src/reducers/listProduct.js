import * as Types from "../constants/ActionTypes";

const initialState = {
  products: null,
  filters: [],
  sorter: -1,
  typeProduct: [],
  search: null,
  slug: null,
  name: "",
  type: 0,
  loading: true,
  index: 0,
  length: 0,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_LIST_PRODUCT:
      state.products = action.products;
      return { ...state };
    case Types.LOAD_SLUG_CONDITION:
      state.slug = action.slug;
      state.name = action.name;
      state.type = action.typeCategory;
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
      state.loading = action.loading;
      return { ...state };
    case Types.LOAD_LIST_PRODUCT_SORTER:
      state.sorter = action.sorter;
      return { ...state };
    case Types.LOAD_LIST_PRODUCT_TYPE_PRODUCT:
      state.typeProduct = action.typeProduct;
      console.log(state.typeProduct);
      return { ...state };
    case Types.UPDATE_INDEX_LIST_PRODUCT:
      state.index = action.index;
      state.length = action.length;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
