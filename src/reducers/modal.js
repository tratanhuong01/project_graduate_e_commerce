import Category from "../components/Modals/Category/Category";
import ModalLogin from "../components/Modals/General/ModalLogin/ModalLogin";
import ModalRegister from "../components/Modals/General/ModalRegister/ModalRegister";
import ModalSearchGetAccount from "../components/Modals/General/ModalSearchGetAccount/ModalSearchGetAccount";
import ModalTypeCode from "../components/Modals/General/ModalTypeCode/ModalTypeCode";
import * as Types from "../constants/ActionTypes";

const initialState = {
  StateModal: false,
  DataModal: "",
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.OPEN_CATEGORY:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      state.DataModal = <Category />;
      return { ...state };
    case Types.CLOSE_MODAL:
      document
        .getElementsByTagName("body")[0]
        .classList.remove("overflow-hidden");
      state.StateModal = false;
      state.DataModal = "";
      return { ...state };
    case Types.OPEN_MODAL_REGISTER:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      state.DataModal = <ModalRegister />;
      return { ...state };
    case Types.OPEN_MODAL_LOGIN:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      state.DataModal = <ModalLogin />;
      return { ...state };
    case Types.OPEN_MODAL_SEARCH_GET_ACCOUNT:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      state.DataModal = <ModalSearchGetAccount />;
      return { ...state };
    case Types.OPEN_MODAL_TYPE_CODE:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      state.DataModal = <ModalTypeCode />;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
