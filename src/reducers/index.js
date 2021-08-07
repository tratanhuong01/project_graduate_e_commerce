import { combineReducers } from "redux";
import modal from "./modal";
import user from "./user";
import category from "./admin/category";
const myReducer = combineReducers({
  modal,
  user,
  category,
});

export default myReducer;
