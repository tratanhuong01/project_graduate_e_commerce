import * as Types from "../constants/ActionTypes";

var initialState = null;
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_USERS:
      state = action.users;
      return state;
    case Types.ADD_USER:
      state = state === null ? [] : state;
      state.push(action.user);
      return state;
    default:
      return state;
  }
};
export default myReducer;
