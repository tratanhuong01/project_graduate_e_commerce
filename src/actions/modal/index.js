import * as Types from "../../constants/ActionTypes";

export const openCategory = () => {
  return {
    type: Types.OPEN_CATEGORY,
  };
};

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

export const openModalTypeCode = (user, data, code) => {
  return {
    type: Types.OPEN_MODAL_TYPE_CODE,
    user,
    data,
    code,
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

export const openModalSendRate = () => {
  return {
    type: Types.OPEN_MODAL_SEND_RATE,
  };
};

export const openViewFastProduct = () => {
  return {
    type: Types.OPEN_MODAL_VIEW_FAST_PRODUCT,
  };
};
