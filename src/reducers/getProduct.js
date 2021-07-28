import * as Types from "../constants/ActionTypes";

var initialState = {
  productTopSell: null,
  brandProduct: null,
  colorProduct: null,
  sizeProduct: null,
};
var myReducer = (state = initialState, action) => {
  var { products } = action;
  switch (action.type) {
    case Types.GET_PRODUCT_TOP_SELL:
      for (let i = 0; i < products.length - 1; i++) {
        for (let j = 0; j < products.length - i - 1; j++) {
          if (products[j].TopSell < products[j + 1].TopSell) {
            var temp = products[j];
            products[j] = products[j + 1];
            products[j + 1] = temp;
          }
        }
      }
      state.productTopSell = products[0];
      return { ...state };
    case Types.GET_ALL_BRAND_PRODUCT:
      var brand = ["Tất cả"];
      products.forEach((element) => {
        if (brand.indexOf(element.BrandProduct) === -1) {
          brand.push(element.BrandProduct);
        }
      });
      state.brandProduct = brand;
      return { ...state };
    case Types.GET_ALL_COLOR_PRODUCT:
      var color = [];
      var colorObject = [];
      products.forEach((element_1) => {
        element_1.UrlImage.forEach((element_2, index) => {
          if (color.indexOf(element_2.Color) === -1) {
            color.push(element_2.Color);
            colorObject.push({
              color: element_2.Color,
              code: element_1.ColorProduct[index].CodeColor,
            });
          }
        });
      });
      state.colorProduct = colorObject;
      return { ...state };
    case Types.GET_ALL_SIZE_PRODUCT:
      var size = [];
      products.forEach((element_1) => {
        element_1.SizeProduct.forEach((element_2, index) => {
          if (size.indexOf(element_2.Size) === -1) {
            size.push(element_2.Size);
          }
        });
      });
      state.sizeProduct = size;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
