import * as Types from "../constants/ActionTypes";

let initialState = {};
if (localStorage && localStorage.getItem("userToken"))
  {
    const token = localStorage.getItem('userToken');
    if (token) {
      initialState = { Authorization: localStorage.getItem("userToken") };
    }
  }

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_HEADERS:
      state = { Authorization: action.headers };
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
