import * as Types from "../constants/ActionTypes";
import socketIOClient from "socket.io-client";
import { SERVER_NODE } from "../constants/Config";

const initialState = {
  admin: null,
  customer: null,
  typing: false,
  list: [],
  group: null,
  first: false,
  socket: socketIOClient.connect(SERVER_NODE),
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_ADMIN_SUPPORT_LIVE:
      state.admin = action.admin;
      return { ...state };
    case Types.UPDATE_GROUP_SUPPORT_LIVE:
      state.group = action.group;
      return { ...state };
    case Types.LOAD_MESSAGES_SUPPORT_LIVE:
      state.list = action.list;
      return { ...state };
    case Types.UPDATE_FIRST_SUPPORT_LIVE:
      state.first = action.status;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
