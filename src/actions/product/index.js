import * as Types from "../../constants/ActionTypes";
import * as productApi from "../../api/productApi";

export const changeAmountProductChoose = (typeDisplay, amount) => {
  return {
    type: Types.CHANGE_MOUNT_PRODUCT_CHOOSE,
    amount,
    typeDisplay,
  };
};

export const loadProductChooseRequest = (slug, typeDisplay, headers) => {
  return async (dispatch) => {
    let formData = new FormData();
    formData.append("slug", slug);
    const result = await productApi.getProductFullBySlugFDT(formData, headers);
    dispatch(
      loadProductChoose({
        data: {
          amount: 1,
          idProduct: result.data.idProduct,
          color: result.data.color,
          memory: result.data.memory,
          productCurrent: result.data,
          slug: slug,
        },
        typeDisplay: typeDisplay,
      })
    );
  };
};

export const loadProductChoose = (data) => {
  return {
    type: Types.LOAD_PRODUCT_CHOOSE,
    data,
  };
};
