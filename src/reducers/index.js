import { combineReducers } from "redux";
import product from "./product";
import detailProduct from "./detailProduct";
import carts from "./carts";
import modal from "./modal";
import getProduct from "./getProduct";
import filterProduct from "./filterProduct";
import viewFastProduct from "./viewFastProduct";
import users from "./users";
import user from "./user";
import search from "./search";
const myReducer = combineReducers({
  product,
  detailProduct,
  carts,
  modal,
  getProduct,
  filterProduct,
  viewFastProduct,
  users,
  user,
  search,
});

export default myReducer;
