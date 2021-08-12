import React from "react";
import Category from "../components/Modals/Category/Category";
import ModalLogin from "../components/Modals/General/ModalLogin/ModalLogin";
import ModalRegister from "../components/Modals/General/ModalRegister/ModalRegister";
import ModalSearchGetAccount from "../components/Modals/General/ModalSearchGetAccount/ModalSearchGetAccount";
import ModalTypeCode from "../components/Modals/General/ModalTypeCode/ModalTypeCode";
import ModalCartAddedCurrent from "../components/Modals/ModalCartAddedCurent/ModalCartAddedCurrent";
import ModalSendRate from "../components/Modals/ModalSendRate/ModalSendRate";
import * as Types from "../constants/ActionTypes";
import ModalViewFastProduct from "../containers/General/ModalViewFastProduct/ModalViewFastProduct";

const initialState = {
  status: false,
  data: "",
  loading: false,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.OPEN_CATEGORY:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.status = true;
      state.data = <Category />;
      return { ...state };
    case Types.CLOSE_MODAL:
      document
        .getElementsByTagName("body")[0]
        .classList.remove("overflow-hidden");
      state.status = false;
      state.data = "";
      state.loading = false;
      return { ...state };
    case Types.OPEN_MODAL_REGISTER:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.status = true;
      state.data = <ModalRegister />;
      return { ...state };
    case Types.OPEN_MODAL_LOGIN:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.status = true;
      state.data = <ModalLogin />;
      return { ...state };
    case Types.OPEN_MODAL_SEARCH_GET_ACCOUNT:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.status = true;
      state.data = <ModalSearchGetAccount />;
      return { ...state };
    case Types.OPEN_MODAL_SEND_RATE:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.status = true;
      state.data = <ModalSendRate />;
      return { ...state };
    case Types.OPEN_MODAL_TYPE_CODE:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.status = true;
      state.data = (
        <ModalTypeCode
          user={action.user}
          data={action.data}
          code={action.code}
        />
      );
      return { ...state };
    case Types.OPEN_MODAL_VIEW_FAST_PRODUCT:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.status = true;
      state.data = <ModalViewFastProduct />;
      return { ...state };
    case Types.OPEN_MODAL_ADDED_CURRENT:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.status = true;
      state.data = <ModalCartAddedCurrent product={action.product} />;
      return { ...state };
    case Types.ON_LOADING_MODAL:
      state.loading = true;
      return { ...state };
    case Types.OFF_LOADING_MODAL:
      state.loading = true;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
