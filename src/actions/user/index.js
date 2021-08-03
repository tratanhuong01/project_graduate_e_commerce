import * as Types from "../../constants/ActionTypes";
import * as modalsAction from "../../actions/modal/index";
import api from "../../Utils/api";

export const registerAccount = (data) => {
  return async (dispatch) => {
    // dispatch(modalsAction.openModalTypeCode(data, "code"));
    console.log(data);
  };
};

export const sendCodeRegister = (data) => {
  return async (dispatch) => {
    if (data.emailOrPhone === "Email") {
      
    } else {
    }
  };
};

export const loginAccountRequest = (data) => {
  return (dispatch) => {};
};

export const loginAccount = (user) => {
  return {
    type: Types.SAVE_USER_LOGIN,
  };
};

export const logoutAccount = () => {
  return {
    type: Types.LOGOUT_USER,
  };
};
