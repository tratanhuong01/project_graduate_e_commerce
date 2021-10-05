import * as Types from "../constants/ActionTypes";

let initialState = null;

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_USER:
      localStorage.setItem("userToken", action.user.token);
      state = action.user.user;
      return state;
    case Types.LOGOUT_USER:
      state = null;
      localStorage.removeItem("userToken");
      return state;
    default:
      return state;
  }
};

export default myReducer;
