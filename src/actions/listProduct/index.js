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
    let formData = new FormData();
    if (
      slug.slugGroupProduct === null ||
      typeof slug.slugGroupProduct === "undefined"
    ) {
      formData.append("slugCategoryProduct", slug.slugCategoryProduct);
      products = await api("getProductBySlugCategory", "POST", formData);
    } else {
      formData.append("slugCategoryProduct", slug.slugCategoryProduct);
      formData.append("slugGroupProduct", slug.slugGroupProduct);
      products = await api(
        "getProductBySlugCategoryAndSlugGroup",
        "POST",
        formData
      );
    }
    dispatch(loadListProduct(products.data));
  };
};
