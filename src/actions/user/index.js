import * as Types from "../../constants/ActionTypes";
import * as modalsAction from "../../actions/modal/index";
import api from "../../Utils/api";

export const registerAccount = (data) => {
  return async (dispatch) => {
    dispatch(modalsAction.onLoadingModal());
    const user = await api("users", "POST", data.user);
    dispatch(
      sendCodeRegister({
        user: user.data,
        emailOrPhone: data.emailOrPhone,
      })
    );
  };
};

export const sendCodeRegister = (data) => {
  return async (dispatch) => {
    if (data.emailOrPhone === "Email") {
      const code = await api("sendCodeEmail", "POST", data.user);
      dispatch(modalsAction.offLoadingModal());
      dispatch(
        modalsAction.openModalTypeCode(data.user, data.user.email, code.data)
      );
    } else {
    }
  };
};

export const loginAccountRequest = (data) => {
  return (dispatch) => {};
};

export const loginAccount = (user) => {
  return {
    type: Types.LOGIN_USER,
    user,
  };
};

export const logoutAccount = () => {
  return {
    type: Types.LOGOUT_USER,
  };
};
