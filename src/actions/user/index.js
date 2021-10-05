import * as Types from "../../constants/ActionTypes";
import * as modalsAction from "../../actions/modal/index";
import * as userApi from "../../api/userApi";

export const registerAccount = (data) => {
  return async (dispatch) => {
    dispatch(modalsAction.onLoadingModal());
    const user = await userApi.addUser(data.user);
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
      const code = await userApi.sendCodeEmail(data.user);
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

export const loadUserRequest = () => {
  return async (dispatch) => {
    if (localStorage && localStorage.getItem("userToken")) {
      const user = await userApi.getInfoUserFromTokenJWT();
      dispatch(loginAccount(user.data));
    }
  };
};
