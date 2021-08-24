import { combineReducers } from "redux";
import modal from "./modal";
import user from "./user";
import product from "./product";
import carts from "./carts";
import orders from "./orders";
import listProduct from "./listProduct";
import profile from "./profile";
import wishLists from "./wishLists";

const myReducer = combineReducers({
  modal,
  user,
  product,
  carts,
  orders,
  listProduct,
  profile,
  wishLists,
});

export default myReducer;
