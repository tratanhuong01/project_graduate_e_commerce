import { combineReducers } from "redux";
import modal from "./modal";
import user from "./user";
import product from "./product";
import carts from "./carts";
import orders from "./orders";
import listProduct from "./listProduct";
import profile from "./profile";
import wishLists from "./wishLists";
import reviewProduct from "./reviewProduct";
import news from "./news";
import bills from "./bills";
import messages from "./messages";
import headers from "./headers";
const myReducer = combineReducers({
  modal,
  user,
  product,
  carts,
  orders,
  listProduct,
  profile,
  wishLists,
  reviewProduct,
  news,
  bills,
  messages,
  headers,
});

export default myReducer;
