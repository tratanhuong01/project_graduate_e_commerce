import { combineReducers } from "redux";
import modal from "./modal";
import user from "./user";
import category from "./admin/category";
import product from "./product";
import carts from "./carts";
import orders from "./orders";
const myReducer = combineReducers({
  modal,
  user,
  category,
  product,
  carts,
  orders,
});

export default myReducer;
