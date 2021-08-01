import * as Types from "../../constants/ActionTypes";
import * as modalsAction from "../../actions/modal/index";

export const registerAccount = (data) => {
  return (dispatch) => {
    dispatch(modalsAction.openModalTypeCode(data, "code"));
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
