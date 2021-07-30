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
