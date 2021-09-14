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
    const category = await api("categoryProductsAll", "GET", null);
    const group = await api("groupProductsAll", "GET", null);
    const indexCategory = category.data.findIndex(
      (item) => item.slugCategoryProduct === slug.slugCategoryProduct
    );
    const indexGroup = group.data.findIndex(
      (item) =>
        item.slugGroupProduct === slug.slugCategoryProduct ||
        item.slugGroupProduct === slug.slugGroupProduct
    );
    if (indexCategory !== -1) {
      const type =
        category.data[indexCategory].typeCategoryProduct === 0 &&
        slug.slugGroupProduct === null
          ? true
          : false;
      if (type)
        products = await api(
          `getProductByCategory/${category.data[indexCategory].id}`,
          "GET",
          null
        );
      else
        products = await api(
          `productsFilter?slugGroupProduct=${
            category.data[indexCategory].typeCategoryProduct === 0
              ? slug.slugGroupProduct
              : slug.slugCategoryProduct
          }`,
          "GET",
          null
        );

      const slugAction =
        category.data[indexCategory].typeCategoryProduct === 0
          ? slug.slugGroupProduct
          : slug.slugCategoryProduct;
      const nameAction = group.data[indexGroup]
        ? group.data[indexGroup].nameGroupProduct
        : category.data[indexCategory].nameCategoryProduct;
      dispatch(loadListProduct(products.data));
      dispatch(loadSlugCondition(slugAction, nameAction, type));
    } else dispatch(loadListProduct([]));
    dispatch(loadingListProduct(false));
  };
};

export const loadSlugCondition = (slug, name, typeCategory) => {
  return {
    type: Types.LOAD_SLUG_CONDITION,
    slug,
    name,
    typeCategory,
  };
};

export const resetFilterProductRequest = (slug) => {
  return async (dispatch) => {
    const result = await api(
      `productsFilter?slugGroupProduct=${slug}`,
      "GET",
      null
    );
    dispatch(loadListProduct(result.data));
    dispatch(resetFilterProduct());
  };
};

export const resetFilterProduct = () => {
  return {
    type: Types.RESET_FILTER_PRODUCT,
  };
};

export const addFilterProductRequest = (data) => {
  return async (dispatch) => {
    const { filters, item, slug } = data;
    const index = filters.findIndex((filter) => filter.id === item.id);
    if (index === -1) {
      let clone = [
        ...filters,
        {
          id: item.id,
          data: item.data,
          name: item.name,
          query: item.query,
          type: item.type,
        },
      ];
      dispatch(addFilterProduct(clone));
      let stringQuery = "";

      clone.forEach((element) => {
        if (element.type === 0) stringQuery += `&${element.query}`;
        else stringQuery += `&${element.query}=${element.data.id}`;
      });
      const result = await api(
        `productsFilter?slugGroupProduct=${slug}${stringQuery}`,
        "GET",
        null
      );
      dispatch(loadListProduct(result.data));
      dispatch(loadingListProduct(false));
    } else dispatch(removeFilterProductRequest(data));
  };
};

export const removeFilterProductRequest = (data) => {
  return async (dispatch) => {
    const { filters, item, slug } = data;
    let clone = filters.filter((filter) => filter.id !== item.id);
    let stringQuery = "";
    clone.forEach((element) => {
      stringQuery += `&${element.query}=${element.data.id}`;
    });
    const result = await api(
      `productsFilter?slugGroupProduct=${slug}${stringQuery}`,
      "GET",
      null
    );
    dispatch(loadListProduct(result.data));
    dispatch(removeFilterProduct(clone));
    dispatch(loadingListProduct(false));
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

export const loadingListProduct = (loading = false) => {
  return {
    type: Types.LOADING_LIST_PRODUCT,
    loading,
  };
};

export const loadListProductSorterRequest = (data) => {
  return async (dispatch) => {
    const { filters, sorter, slug } = data;
    let stringQuery = "";

    if (filters.length > 0)
      filters.forEach((element) => {
        if (element.type === 0) stringQuery += `&${element.query}`;
        else stringQuery += `&${element.query}=${element.data.id}`;
      });
    stringQuery += `&filter=${sorter}`;

    const result = await api(
      `productsFilter?slugGroupProduct=${slug}${stringQuery}`,
      "GET",
      null
    );
    console.log(result);
    dispatch(loadListProduct(result.data));
    dispatch(loadingListProduct(false));
    dispatch(loadListProductSorter(sorter));
  };
};

export const loadListProductSorter = (sorter) => {
  return {
    type: Types.LOAD_LIST_PRODUCT_SORTER,
    sorter,
  };
};
