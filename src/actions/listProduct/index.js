import * as Types from "../../constants/ActionTypes";
import * as productApi from "../../api/productApi";

const returnStringQuery = (data) => {
  let stringQuery = "";
  if (data.filters.length > 0)
    data.filters.forEach((element) => {
      if (element.type === 0) stringQuery += `&${element.query}`;
      else stringQuery += `&${element.query}=${element.data.id}`;
    });
  if (data.sorter !== -1) stringQuery += `&sorter=${data.sorter}`;
  if (data.typeProduct.length > 0)
    data.typeProduct.forEach((element) => {
      stringQuery += `&typeProduct=${element}`;
    });
  return stringQuery;
};

export const loadListProduct = (products) => {
  return {
    type: Types.LOAD_LIST_PRODUCT,
    products,
  };
};

export const loadListProductRequest = (slug) => {
  return async (dispatch) => {
    let products = null;
    const category = await productApi.getAllCategoryProduct();
    const group = await productApi.getAllGroupProduct();
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
        products = await productApi.getProductByCategory(
          category.data[indexCategory].id
        );
      else
        products = await productApi.getProductFilterByGroupProduct(
          category.data[indexCategory].typeCategoryProduct === 0
            ? slug.slugGroupProduct
            : slug.slugCategoryProduct,
          ""
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
    const result = await productApi.getProductFilterByGroupProduct(slug, "");
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
    const { filters, item, slug, typeProduct, sorter } = data;
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

      const result = await productApi.getProductFilterByGroupProduct(
        slug,
        returnStringQuery({ filters: clone, typeProduct, sorter })
      );
      dispatch(loadListProduct(result.data));
      dispatch(loadingListProduct(false));
    } else dispatch(removeFilterProductRequest(data));
  };
};

export const removeFilterProductRequest = (data) => {
  return async (dispatch) => {
    const { filters, item, slug, typeProduct, sorter } = data;
    let clone = filters.filter((filter) => filter.id !== item.id);
    const result = await productApi.getProductFilterByGroupProduct(
      slug,
      returnStringQuery({ filters: clone, typeProduct, sorter })
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
    const { filters, sorter, slug, typeProduct } = data;
    const result = await productApi.getProductFilterByGroupProduct(
      slug,
      returnStringQuery({ filters, typeProduct, sorter })
    );
    dispatch(loadListProduct(result.data));
    dispatch(loadingListProduct(false));
    dispatch(loadListProductSorter(sorter));
  };
};

export const loadListProductByTypeProductRequest = (data) => {
  return async (dispatch) => {
    const { filters, sorter, slug, typeProduct, type, item } = data;
    let clone = [...typeProduct];
    if (type === 1) clone.push(item);
    else clone = clone.filter((dt) => dt !== item);
    dispatch(loadListProductByTypeProduct(clone));
    const result = await productApi.getProductFilterByGroupProduct(
      slug,
      returnStringQuery({ filters, typeProduct: clone, sorter })
    );
    dispatch(loadListProduct(result.data));
    dispatch(loadingListProduct(false));
  };
};

export const loadListProductByTypeProduct = (typeProduct) => {
  return {
    type: Types.LOAD_LIST_PRODUCT_TYPE_PRODUCT,
    typeProduct,
  };
};

export const loadListProductSorter = (sorter) => {
  return {
    type: Types.LOAD_LIST_PRODUCT_SORTER,
    sorter,
  };
};
