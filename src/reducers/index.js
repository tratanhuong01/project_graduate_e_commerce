import { combineReducers } from "redux";
import modal from "./modal";
import user from "./user";

const myReducer = combineReducers({
  modal,
  user,
});

export default myReducer;
