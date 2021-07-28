import * as Types from "./../constants/ActionTypes";
var initialState = {
  product: null,
  indexImageActive: 0,
  imageMain: null,
  productChoose: {
    IDProduct: "",
    IDKhachHang: "",
    Color: "",
    Size: "",
    NumberChoose: 1,
  },
  viewScroll: false,
  indexSizeActive: 0,
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.VIEW_FAST_PRODUCT:
      state.product = action.product;
      state.imageMain = action.product.UrlImage[0].Url;
      state.productChoose.IDProduct = action.product.id;
      state.productChoose.Color = action.product.UrlImage[0].Color;
      state.productChoose.Size = action.product.SizeProduct[0].Size;
      state.productChoose.NumberChoose = 1;
      state.indexSizeActive = 0;
      state.indexImageActive = 0;
      return { ...state };

    default:
      return state;
  }
};

export default myReducer;
