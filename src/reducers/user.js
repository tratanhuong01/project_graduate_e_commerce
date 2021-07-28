import * as Types from "../constants/ActionTypes";

var initialState = null;
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CHECK_HAVE_LOGIN:
      if (localStorage && localStorage.getItem("user")) {
        state = JSON.parse(localStorage.getItem("user"));
      } else {
        state = null;
      }
      return state;
    case Types.SAVE_USER_LOGIN:
      localStorage.setItem("user", JSON.stringify(action.user));
      state = action.user;
      return { ...state };
    case Types.LOGOUT_USER:
      state = null;
      localStorage.removeItem("user");
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
