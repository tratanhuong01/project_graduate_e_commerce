import { combineReducers } from "redux";
import modal from "./modal";
import user from "./user";
import category from "./admin/category";
import product from "./product";
const myReducer = combineReducers({
  modal,
  user,
  category,
  product,
});

export default myReducer;
