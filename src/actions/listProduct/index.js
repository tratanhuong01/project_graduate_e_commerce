import * as Types from "../../constants/ActionTypes";
import api from "../../Utils/api";

export const loadListProduct = (products) => {
  return {
    type: Types.LOAD_LIST_PRODUCT,
    products,
  };
};

export const loadListProductRequest = (slug) => {
  return async (dispatch) => {
    let products = null;
    const formData = new FormData();
    const result = await api("categoryProductsAll", "GET", null);
    const index = result.data.findIndex(
      (item) => item.slugCategoryProduct === slug.slugCategoryProduct
    );
    if (index !== -1) {
      formData.append("slugCategoryProduct", slug.slugCategoryProduct);
      formData.append(
        "slugGroupProduct",
        result.data[index].typeCategoryProduct === 0
          ? slug.slugGroupProduct
          : slug.slugCategoryProduct
      );
      products = await api(
        "getProductBySlugCategoryAndSlugGroup",
        "POST",
        formData
      );
      dispatch(loadListProduct(products.data));
      dispatch(
        loadSlugCondition(
          result.data[index].typeCategoryProduct === 0
            ? slug.slugGroupProduct
            : slug.slugCategoryProduct
        )
      );
    } else dispatch(loadListProduct(""));
  };
};

export const loadSlugCondition = (slug) => {
  return {
    type: Types.LOAD_SLUG_CONDITION,
    slug,
  };
};

export const resetFilterProduct = () => {
  return {
    type: Types.RESET_FILTER_PRODUCT,
  };
};

export const addFilterProductRequest = (data) => {
  return (dispatch) => {
    const { filters, item } = data;
    const index = filters.findIndex((filter) => filter.id === item.id);
    if (index === -1)
      dispatch(
        addFilterProduct([
          ...filters,
          {
            id: item.id,
            data: item.data,
            name: item.name,
          },
        ])
      );
    else dispatch(removeFilterProductRequest(data));
  };
};

export const removeFilterProductRequest = (data) => {
  return (dispatch) => {
    const { filters, item } = data;
    let clone = filters.filter((filter) => filter.id !== item.id);
    dispatch(removeFilterProduct(clone));
  };
};

export const removeFilterProduct = (data) => {
  return {
    type: Types.REMOVE_FILTER_PRODUCT,
    data,
  };
};

export const addFilterProduct = (data) => {
  return {
    type: Types.ADD_FILTER_PRODUCT,
    data,
  };
};

export const resetAllFilterSorterSearchListProduct = () => {
  return {
    type: Types.RESET_ALL_FILTER_SORTER_SEARCH_LIST_PRODUCT,
  };
};
