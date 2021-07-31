import * as Types from "../../constants/ActionTypes";

export const registerAccount = (data) => {
  return (dispatch) => {};
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
