import * as Types from "../constants/ActionTypes";

const initialState = {
  list: [],
  listCurrent: [],
  loading: true,
  index: 0,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_BILL_USER:
      state.list = action.list;
      state.listCurrent = action.listCurrent;
      state.index = action.index;
      return { ...state };
    case Types.SET_LOADING_BILL_USER:
      state.loading = action.status;
      return { ...state };
    case Types.LOAD_BILL_USER_BY_INDEX:
      state.index = action.index;
      state.listCurrent = action.list;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
