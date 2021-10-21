import * as Types from "../../constants/ActionTypes";
import * as productsAction from "../product/index";

export const closeModal = () => {
  return {
    type: Types.CLOSE_MODAL,
  };
};

export const openModalRegister = () => {
  return {
    type: Types.OPEN_MODAL_REGISTER,
  };
};

export const openModalLogin = () => {
  return {
    type: Types.OPEN_MODAL_LOGIN,
  };
};

export const openModalSearchGetAccount = () => {
  return {
    type: Types.OPEN_MODAL_SEARCH_GET_ACCOUNT,
  };
};

export const openModalTypeCode = (user, data, code, forget) => {
  return {
    type: Types.OPEN_MODAL_TYPE_CODE,
    user,
    data,
    code,
    forget,
  };
};

export const onLoadingModal = () => {
  return {
    type: Types.ON_LOADING_MODAL,
  };
};

export const offLoadingModal = () => {
  return {
    type: Types.OFF_LOADING_MODAL,
  };
};

export const openModalSendRate = (products) => {
  return {
    type: Types.OPEN_MODAL_SEND_RATE,
    products,
  };
};

export const openViewFastProductRequest = (product) => {
  return async (dispatch) => {
    await dispatch(
      productsAction.loadProductChoose({
        data: {
          amount: 1,
          idProduct: product.idProduct,
          color: product.color,
          memory: product.memory,
          productCurrent: product,
          slug: typeof product !== "undefined" && product.slug,
        },
        typeDisplay: 1,
      })
    );
    await dispatch(openViewFastProduct(product));
  };
};

export const openViewFastProduct = (product) => {
  return {
    type: Types.OPEN_MODAL_VIEW_FAST_PRODUCT,
    product,
  };
};

export const openModalAddedCurrent = (product) => {
  return {
    type: Types.OPEN_MODAL_ADDED_CURRENT,
    product,
  };
};

export const setPopupAds = () => {
  return {
    type: Types.SET_POPUP_ADS,
  };
};

export const openModalAddress = (address, setAddresses) => {
  return {
    type: Types.OPEN_MODAL_ADDRESS,
    address: address,
    setAddresses: setAddresses,
  };
};

export const openModalAddBank = () => {
  return {
    type: Types.OPEN_MODAL_ADD_BANK,
  };
};

export const openModalChangeAddressPayment = (
  addresses,
  address,
  setAddress
) => {
  return {
    type: Types.OPEN_MODAL_CHANGE_ADDRESS_PAYMENT,
    addresses,
    address,
    setAddress,
  };
};

export const openModalInfoDetailProduct = (idLineProduct) => {
  return {
    type: Types.OPEN_MODAL_INFO_DETAIL_PRODUCT,
    idLineProduct,
  };
};

export const openModalChangeVoucher = () => {
  return {
    type: Types.OPEN_MODAL_CHANGE_VOUCHER,
  };
};

export const orderSuccess = () => {
  return {
    type: Types.ORDER_SUCCESS,
  };
};

export const openModalForgotPassword = (user, verify) => {
  return {
    type: Types.OPEN_MODAL_FORGOT_PASSWORD,
    user,
    verify,
  };
};

export const openModalChangePasswordForget = (user) => {
  return {
    type: Types.OPEN_MODAL_CHANGE_PASSWORD_FORGET,
    user,
  };
};
