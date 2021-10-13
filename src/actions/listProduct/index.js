import * as Types from "../../constants/ActionTypes";
import * as productApi from "../../api/productApi";

const returnStringQueryAll = (data) => {
  let stringQuery = "";
  if (data.filters)
    if (data.filters.length > 0)
      data.filters.forEach((element) => {
        if (element.type === 0) stringQuery += `&${element.query}`;
        else stringQuery += `&${element.query}=${element.data.id}`;
      });
  if (data.sorter)
    if (data.sorter !== -1) stringQuery += `&sorter=${data.sorter}`;
  if (data.typeProduct)
    if (data.typeProduct.length > 0)
      data.typeProduct.forEach((element) => {
        stringQuery += `&typeProduct=${element}`;
      });
  return stringQuery;
};

const returnStringQueryLimit = (data) => {
  let stringQuery = "";
  if (data.filters)
    if (data.filters.length > 0)
      data.filters.forEach((element) => {
        if (element.type === 0) stringQuery += `&${element.query}`;
        else stringQuery += `&${element.query}=${element.data.id}`;
      });
  if (data.sorter)
    if (data.sorter !== -1) stringQuery += `&sorter=${data.sorter}`;
  if (data.typeProduct)
    if (data.typeProduct.length > 0)
      data.typeProduct.forEach((element) => {
        stringQuery += `&typeProduct=${element}`;
      });
  return `${stringQuery}&offset=${data.index}&limit=${12}`;
};

export const loadListProduct = (products) => {
  return {
    type: Types.LOAD_LIST_PRODUCT,
    products,
  };
};

export const loadListProductRequest = (slug, headers) => {
  return async (dispatch) => {
    let productsAll = null;
    let productsLimit = null;
    if (
      typeof slug.slugGroupProduct === "undefined" &&
      typeof slug.slugCategoryProduct === "undefined"
    ) {
      const all = await productApi.getProductAllCategory(12, 0, 0, headers);
      const limit = await productApi.getProductAllCategory(12, 0, 1, headers);
      dispatch(loadListProduct(limit.data));
      dispatch(updateIndexListProduct(0, all.data));
      dispatch(loadSlugCondition(null, null, false));
    } else {
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
          slug.slugGroupProduct === slug.slugCategoryProduct
            ? true
            : false;
        if (type) {
          productsAll = await productApi.getProductByCategoryAll(
            category.data[indexCategory].id,
            headers
          );
          productsLimit = await productApi.getProductByCategoryLimit(
            category.data[indexCategory].id,
            0,
            headers
          );
        } else {
          productsAll = await productApi.getProductFilterByGroupProductAll(
            category.data[indexCategory].typeCategoryProduct === 0
              ? slug.slugGroupProduct
              : slug.slugCategoryProduct,
            "",
            headers
          );
          productsLimit = await productApi.getProductFilterByGroupProductLimit(
            category.data[indexCategory].typeCategoryProduct === 0
              ? slug.slugGroupProduct
              : slug.slugCategoryProduct,
            "&offset=0&limit=12",
            headers
          );
        }
        const slugAction =
          category.data[indexCategory].typeCategoryProduct === 0
            ? slug.slugGroupProduct
            : slug.slugCategoryProduct;
        const nameAction = group.data[indexGroup]
          ? group.data[indexGroup].nameGroupProduct
          : category.data[indexCategory].nameCategoryProduct;
        dispatch(loadListProduct(productsLimit.data));
        dispatch(updateIndexListProduct(0, productsAll.data));
        dispatch(loadSlugCondition(slugAction, nameAction, type));
      } else dispatch(loadListProduct([]));
    }
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

export const resetFilterProductRequest = (slug, headers) => {
  return async (dispatch) => {
    dispatch(loadingListProduct(true));
    dispatch(resetFilterProduct());
    const result_1 = await productApi.getProductFilterByGroupProductAll(
      slug,
      "",
      headers
    );
    dispatch(updateIndexListProduct(0, result_1.data));
    const result_2 = await productApi.getProductFilterByGroupProductLimit(
      slug,
      returnStringQueryLimit({
        filters: [],
        typeProduct: [],
        sorter: null,
        index: 0,
      }),
      headers
    );
    dispatch(loadListProduct(result_2.data));
    dispatch(loadingListProduct(false));
  };
};

export const resetFilterProduct = () => {
  return {
    type: Types.RESET_FILTER_PRODUCT,
  };
};

export const addFilterProductRequest = (data, headers) => {
  return async (dispatch) => {
    dispatch(loadingListProduct(true));
    const { filters, item, slug, typeProduct, sorter } = data;
    const pos = filters.findIndex(
      (filter) => filter.id === item.id && filter.name === item.name
    );
    if (pos === -1) {
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
      const result_1 = await productApi.getProductFilterByGroupProductAll(
        slug,
        returnStringQueryAll({ filters: clone, typeProduct, sorter }),
        headers
      );
      dispatch(updateIndexListProduct(0, result_1.data));
      const result_2 = await productApi.getProductFilterByGroupProductLimit(
        slug,
        returnStringQueryLimit({
          filters: clone,
          typeProduct,
          sorter,
          index: 0,
        }),
        headers
      );
      dispatch(loadListProduct(result_2.data));
      dispatch(loadingListProduct(false));
    } else dispatch(removeFilterProductRequest(data));
  };
};

export const filterProductPaginationIndexRequest = (data, headers) => {
  return async (dispatch) => {
    dispatch(loadingListProduct(true));
    window.scrollTo(0, 176);
    const { filters, slug, typeProduct, sorter, index } = data;
    const result_1 = await productApi.getProductFilterByGroupProductAll(
      slug,
      returnStringQueryAll({ filters, typeProduct, sorter }),
      headers
    );
    dispatch(updateIndexListProduct(index, result_1.data));
    const result_2 = await productApi.getProductFilterByGroupProductLimit(
      slug,
      returnStringQueryLimit({ filters, typeProduct, sorter, index }),
      headers
    );
    dispatch(loadListProduct(result_2.data));
    dispatch(loadingListProduct(false));
  };
};

export const removeFilterProductRequest = (data, headers) => {
  return async (dispatch) => {
    dispatch(loadingListProduct(true));
    const { filters, item, slug, typeProduct, sorter, index } = data;
    let clone = filters.filter((filter) => filter.id !== item.id);
    dispatch(removeFilterProduct(clone));
    const result_1 = await productApi.getProductFilterByGroupProductAll(
      slug,
      returnStringQueryAll({ filters: clone, typeProduct, sorter }),
      headers
    );
    const result_2 = await productApi.getProductFilterByGroupProductLimit(
      slug,
      returnStringQueryLimit({ filters: clone, typeProduct, sorter, index: 0 }),
      headers
    );
    dispatch(loadListProduct(result_2.data));
    dispatch(updateIndexListProduct(index, result_1.data));
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

export const loadListProductSorterRequest = (data, headers) => {
  return async (dispatch) => {
    const { filters, sorter, slug, typeProduct, index } = data;
    dispatch(loadingListProduct(true));
    dispatch(loadListProductSorter(sorter));
    const result_1 = await productApi.getProductFilterByGroupProductAll(
      slug,
      returnStringQueryAll({ filters, typeProduct, sorter }),
      headers
    );
    const result_2 = await productApi.getProductFilterByGroupProductLimit(
      slug,
      returnStringQueryLimit({ filters, typeProduct, sorter, index }),
      headers
    );
    dispatch(updateIndexListProduct(index, result_1.data));
    dispatch(loadListProduct(result_2.data));
    dispatch(loadingListProduct(false));
  };
};

export const loadListProductByTypeProductRequest = (data, headers) => {
  return async (dispatch) => {
    dispatch(loadingListProduct(true));
    const { filters, sorter, slug, typeProduct, type, item, index } = data;
    let clone = [...typeProduct];
    if (type !== 1) clone.push(item);
    else clone = clone.filter((dt) => dt !== item);
    dispatch(loadListProductByTypeProduct(clone));
    const result_1 = await productApi.getProductFilterByGroupProductAll(
      slug,
      returnStringQueryAll({ filters, typeProduct: clone, sorter }),
      headers
    );
    const result_2 = await productApi.getProductFilterByGroupProductLimit(
      slug,
      returnStringQueryLimit({ filters, typeProduct: clone, sorter, index }),
      headers
    );
    dispatch(updateIndexListProduct(index, result_1.data));
    dispatch(loadListProduct(result_2.data));
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

export const updateIndexListProduct = (index, length) => {
  return {
    type: Types.UPDATE_INDEX_LIST_PRODUCT,
    index,
    length,
  };
};
