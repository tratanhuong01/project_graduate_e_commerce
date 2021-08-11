import * as Types from "../../constants/ActionTypes";
import api from "../../Utils/api";

export const changeAmountProductChoose = (typeDisplay, amount) => {
  return {
    type: Types.CHANGE_MOUNT_PRODUCT_CHOOSE,
    amount,
    typeDisplay,
  };
};

export const loadProductChooseRequest = (slug) => {
  return async (dispatch) => {
    let formData = new FormData();
    formData.append("slug", slug);
    const result = await api("getProductBySlug", "POST", formData);
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
        typeDisplay: 0,
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
