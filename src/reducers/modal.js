import React from "react";
import PopupAds from "../components/General/PopupAds/PopupAds";
import ModalLogin from "../components/Modals/General/ModalLogin/ModalLogin";
import ModalRegister from "../components/Modals/General/ModalRegister/ModalRegister";
import ModalSearchGetAccount from "../components/Modals/General/ModalSearchGetAccount/ModalSearchGetAccount";
import ModalTypeCode from "../components/Modals/General/ModalTypeCode/ModalTypeCode";
import ModalCartAddedCurrent from "../components/Modals/ModalCartAddedCurent/ModalCartAddedCurrent";
import ModalSendRate from "../components/Modals/ModalSendRate/ModalSendRate";
import ModalAddress from "../components/Modals/Profile/ModalAddress/ModalAddress";
import * as Types from "../constants/ActionTypes";
import ModalViewFastProduct from "../containers/General/ModalViewFastProduct/ModalViewFastProduct";

const initialState = {
  data: null,
  loading: false,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CLOSE_MODAL:
      state.data = null;
      state.loading = false;
      return { ...state };
    case Types.OPEN_MODAL_REGISTER:
      state.data = <ModalRegister />;
      return { ...state };
    case Types.OPEN_MODAL_LOGIN:
      state.data = <ModalLogin />;
      return { ...state };
    case Types.OPEN_MODAL_SEARCH_GET_ACCOUNT:
      state.data = <ModalSearchGetAccount />;
      return { ...state };
    case Types.OPEN_MODAL_SEND_RATE:
      state.data = <ModalSendRate products={action.products} />;
      return { ...state };
    case Types.OPEN_MODAL_TYPE_CODE:
      state.data = (
        <ModalTypeCode
          user={action.user}
          data={action.data}
          code={action.code}
        />
      );
      return { ...state };
    case Types.OPEN_MODAL_VIEW_FAST_PRODUCT:
      state.data = <ModalViewFastProduct product={action.product} />;
      return { ...state };
    case Types.OPEN_MODAL_ADDED_CURRENT:
      state.data = <ModalCartAddedCurrent product={action.product} />;
      return { ...state };
    case Types.ON_LOADING_MODAL:
      state.loading = true;
      return { ...state };
    case Types.OFF_LOADING_MODAL:
      state.loading = true;
      return { ...state };
    case Types.SET_POPUP_ADS:
      state.data = <PopupAds />;
      return { ...state };
    case Types.OPEN_MODAL_ADDRESS:
      state.data = (
        <ModalAddress
          address={action.address}
          setAddresses={(addresses) => action.setAddresses(addresses)}
        />
      );
      return { ...state };
    case Types.OPEN_MODAL_ADD_BANK:
      state.data = <ModalAddress address={action.address} />;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
