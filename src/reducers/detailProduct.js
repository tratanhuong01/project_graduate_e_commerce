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
  status: true,
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.RESET_DETAIL_PRODUCT:
      state = {
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
        status: true,
      };
      return { ...state };
    case Types.VIEW_PRODUCT:
      var { products, slug, user } = action;
      var index = products.findIndex((item) => item.Path === slug);
      if (index !== -1) {
        state.product = products[index];
        state.productChoose.IDProduct = products[index].id;
        state.productChoose.IDKhachHang =
          user === null || typeof user === "undefined" ? "" : user.id;
      }
      return state;
    case Types.VIEW_SCROLL_PRODUCT:
      var y = window.scrollY;
      if (y >= 600) {
        state.viewScroll = true;
      } else {
        state.viewScroll = false;
      }
      return { ...state };
    case Types.HOVER_IMAGE_EVENT_DP:
      var { data } = action;
      state.indexImageActive = data.indexImageActive;
      state.imageMain = data.imageMain;
      state.productChoose.Color = data.color;
      return { ...state };
    case Types.CHOOSE_SIZE_PRODUCT:
      state.productChoose.Size = action.data.size;
      state.indexSizeActive = action.data.indexSizeActive;
      return { ...state };
    case Types.ASC_OR_DESC_NUMBER_PRODUCT:
      state.productChoose.NumberChoose = action.number;
      return { ...state };
    case Types.SCROLL_TOP:
      window.scroll(0, 0);
      state.viewScroll = false;
      return { ...state };
    case Types.OPEN_VIEW_FAST_PRODUCT:
      state.status = false;
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
