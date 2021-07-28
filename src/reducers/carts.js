import * as Types from "../constants/ActionTypes";
var initialState = [];

var myReducer = (state = initialState, action) => {
  var index = -1;
  switch (action.type) {
    case Types.GET_ALL_CART:
      state = action.carts;
      return [...state];
    case Types.ADD_CART:
      var { cart, product } = action.cart;
      var data = {
        cart: cart,
        product: product,
      };
      state.push(data);
      return [...state];
    case Types.DELETE_CART_BY_ID:
      index = state.findIndex((item) => {
        return item.cart.id === action.id;
      });
      state.splice(index, 1);
      return [...state];
    case Types.UPDATE_CART:
      index = state.findIndex((item) => {
        return item.cart.id === action.cart.id;
      });
      state[index].cart = action.cart;
      return [...state];
    case Types.UPDATE_CART_ISSET:
      index = state.findIndex((item) => {
        return item.cart.id === action.cart.id;
      });
      state[index].cart = action.cart;
      return [...state];
    default:
      return state;
  }
};
export default myReducer;
