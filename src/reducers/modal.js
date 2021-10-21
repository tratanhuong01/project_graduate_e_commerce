import React from "react";
import PopupAds from "../components/General/PopupAds/PopupAds";
import ModalForgotPassword from "../components/Modals/General/ModalForgotPassword/ModalForgotPassword";
import ModalLogin from "../components/Modals/General/ModalLogin/ModalLogin";
import ModalRegister from "../components/Modals/General/ModalRegister/ModalRegister";
import ModalSearchGetAccount from "../components/Modals/General/ModalSearchGetAccount/ModalSearchGetAccount";
import ModalTypeCode from "../components/Modals/General/ModalTypeCode/ModalTypeCode";
import ModalCartAddedCurrent from "../components/Modals/ModalCartAddedCurent/ModalCartAddedCurrent";
import ModalInfoDetailProduct from "../components/Modals/ModalInfoDetailProduct/ModalInfoDetailProduct";
import ModalSendRate from "../components/Modals/ModalSendRate/ModalSendRate";
import ModalChangeAddressPayment from "../components/Modals/Payment/ModalChangeAddressPayment/ModalChangeAddressPayment";
import ModalChangeVoucher from "../components/Modals/Payment/ModalChangeVoucher/ModalChangeVoucher";
import ModalOrderSuccess from "../components/Modals/Payment/ModalOrderSuccess/ModalOrderSuccess";
import ModalAddress from "../components/Modals/Profile/ModalAddress/ModalAddress";
import * as Types from "../constants/ActionTypes";
import ModalViewFastProduct from "../components/Modals/ModalViewFastProduct";
import ModalChangePassword from "../components/Modals/General/ModalChangePassword/ModalChangePassword";

const initialState = {
  data: null,
  loading: true,
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
    case Types.OPEN_MODAL_FORGOT_PASSWORD:
      state.data = (
        <ModalForgotPassword user={action.user} verify={action.verify} />
      );
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
          forget={action.forget}
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
      state.loading = false;
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
    case Types.OPEN_MODAL_CHANGE_ADDRESS_PAYMENT:
      state.data = (
        <ModalChangeAddressPayment
          address={action.address}
          addresses={action.addresses}
          setAddress={(address) => action.setAddress(address)}
        />
      );
      return { ...state };
    case Types.OPEN_MODAL_INFO_DETAIL_PRODUCT:
      state.data = (
        <ModalInfoDetailProduct idLineProduct={action.idLineProduct} />
      );
      return { ...state };
    case Types.OPEN_MODAL_CHANGE_VOUCHER:
      state.data = <ModalChangeVoucher />;
      return { ...state };
    case Types.ORDER_SUCCESS:
      state.data = <ModalOrderSuccess />;
      return { ...state };
    case Types.OPEN_MODAL_CHANGE_PASSWORD_FORGET:
      state.data = <ModalChangePassword user={action.user} />;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
