import * as Types from "../constants/ActionTypes";
var initialState = {
  products: null,
  brand: null,
  price: {
    from: 0,
    to: 100000000,
  },
  color: null,
  size: null,
  search: "",
};

const myReducer = (state = initialState, action) => {
  var newProduct = [];
  const { products } = action;
  state.products = products;
  switch (action.type) {
    case Types.FILTER_PRODUCT_BRAND:
      const brand = action.brand === null ? "Tất cả" : action.brand;
      if (brand === "Tất cả") {
        state.products = action.products;
      } else {
        action.products.forEach((element) => {
          if (element.BrandProduct === action.brand) {
            newProduct.push(element);
          }
        });
        state.products = newProduct;
      }
      state.brand = brand;
      return { ...state };
    case Types.FILTER_PRODUCT_COLOR:
      if (action.color === null) {
        state.products = action.products;
      } else {
        action.products.forEach((element_1) => {
          element_1.UrlImage.forEach((element_2) => {
            if (element_2.Color === action.color) {
              newProduct.push(element_1);
            }
          });
        });
        state.products = newProduct;
      }
      state.color = action.color;
      return { ...state };
    case Types.FILTER_PRODUCT_SIZE:
      if (action.size === null) {
        state.products = action.products;
      } else {
        action.products.forEach((element_1) => {
          element_1.SizeProduct.forEach((element_2) => {
            if (element_2.Size === action.size) {
              newProduct.push(element_1);
            }
          });
        });
        state.products = newProduct;
      }
      state.size = action.size;
      return { ...state };
    case Types.FILTER_PRODUCT_PRICE:
      if (action.size === null) {
        state.products = action.products;
      } else {
        action.products.forEach((element) => {
          if (
            element.Price.Price > action.price.from &&
            element.Price.Price < action.price.to
          ) {
            newProduct.push(element);
          }
        });
        state.products = newProduct;
      }
      state.price = action.price;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
