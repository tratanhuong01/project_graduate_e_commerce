import * as Types from "../constants/ActionTypes";

let initialState = null;
if (localStorage && localStorage.getItem("user"))
  initialState = JSON.parse(localStorage.getItem("user"));

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_USER:
      localStorage.setItem("user", JSON.stringify(action.user));
      state = action.user;
      return state;
    case Types.LOGOUT_USER:
      state = null;
      localStorage.removeItem("user");
      return state;
    default:
      return state;
  }
};

export default myReducer;
