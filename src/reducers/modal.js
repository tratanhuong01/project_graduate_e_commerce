import * as Types from "../constants/ActionTypes";
import ModalCartAddedCurrent from "../containers/General/ModalCartAddedCurrent/ModalCartAddedCurrent";
import Category from "../components/General/Category/Category";
import ModalViewFastProduct from "../containers/General/ModalViewFastProduct/ModalViewFastProduct";
import ModalRegister from "../containers/General/ModalRegister/ModalRegister";
import ModalLogin from "../containers/General/ModalLogin/ModalLogin";
import PopupAds from "../components/General/PopupAds/PopupAds";
var initialState = {
  StateModal: false,
  DataModal: "",
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_MODAL_DEFAULT:
      state.StateModal = true;
      state.DataModal = <PopupAds />;
      return { ...state };
    case Types.SHOW_MODAL_ADD_CART_CURRENT:
      state.StateModal = true;
      var { cart, product } = action;
      state.DataModal = <ModalCartAddedCurrent product={product} cart={cart} />;
      return { ...state };
    case Types.CLOSE_MODAL:
      state.StateModal = false;
      state.DataModal = "";
      return { ...state };
    case Types.OPEN_CATEGORY:
      state.StateModal = true;
      state.DataModal = <Category />;
      return { ...state };
    case Types.OPEN_VIEW_FAST_PRODUCT:
      state.StateModal = true;
      state.DataModal = <ModalViewFastProduct />;
      return { ...state };
    case Types.OPEN_MODAL_LOGIN:
      state.StateModal = true;
      state.DataModal = <ModalLogin />;
      return { ...state };
    case Types.OPEN_MODAL_REGISTER:
      state.StateModal = true;
      state.DataModal = <ModalRegister />;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
