import * as Types from "../../constants/ActionTypes";
import * as modalsAction from "../../actions/modal/index";
import api from "../../Utils/api";

export const registerAccount = (data) => {
  return async (dispatch) => {
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
    console.log(data.emailOrPhone);
    if (data.emailOrPhone === "Email") {
      const code = await api("sendCodeEmail", "POST", data.user);
      dispatch(
        modalsAction.openModalTypeCode({
          user: data.user,
          data: data.user.email,
          code: code.data,
        })
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
    type: Types.SAVE_USER_LOGIN,
  };
};

export const logoutAccount = () => {
  return {
    type: Types.LOGOUT_USER,
  };
};
