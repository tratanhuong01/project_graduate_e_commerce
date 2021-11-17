import * as Types from "../../constants/ActionTypes";
import * as modalsAction from "../../actions/modal/index";
import * as userApi from "../../api/userApi";
import api from "../../Utils/api";

export const registerAccount = (data, notSend) => {
  return async (dispatch) => {
    dispatch(modalsAction.onLoadingModal());
    try {
      const user = await userApi.addUser(data.user);
      if (notSend) {
        const result = await api(
          `checkEmailHave`,
          "POST",
          data.user.email,
          { "Content-Type": "application/json" }
        );
        dispatch(loginAccount(result.data));
        dispatch(updateHeaders(result.data.token));
        dispatch({ type: Types.CLOSE_MODAL });
      } else {
        dispatch(
          sendCodeRegister({
            user: user.data,
            emailOrPhone: data.emailOrPhone,
          })
        );
      }
    } catch (error) {
      throw error;
    }
  };
};

export const sendCodeRegister = (data, forget) => {
  return async (dispatch) => {
    if (data.emailOrPhone === "Email")
      try {
        const code = await userApi.sendCodeEmail(data.user);
        if (forget)
          await api(
            `passwordResets`,
            "POST",
            {
              id: null,
              passwordResetUser: data.user,
              code: code.data,
              timeCreated: null,
            },
            null
          );
        dispatch(modalsAction.offLoadingModal());
        dispatch(
          modalsAction.openModalTypeCode(
            data.user,
            data.user.email,
            code.data,
            forget
          )
        );
      } catch (error) {
        throw error;
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

export const loadUserRequest = (headers) => {
  return async (dispatch) => {
    if (localStorage && localStorage.getItem("userToken"))
      try {
        const user = await userApi.getInfoUserFromTokenJWT(headers);
        dispatch(loginAccount(user.data));
        dispatch(updateHeaders(user.data.token));
      } catch (error) {
        throw error;
      }
  };
};

export const updateHeaders = (headers) => {
  return {
    type: Types.UPDATE_HEADERS,
    headers,
  };
};
