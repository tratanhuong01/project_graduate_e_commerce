import DetailBill from "../components/Profile/ProfileRight/DetailBill/DetailBill";
import EmailOrPhoneEdit from "../components/Profile/ProfileRight/MyAccount/FormAccount/EmailOrPhoneEdit/EmailOrPhoneEdit";
import HistoryVoucher from "../components/Profile/ProfileRight/MyVoucher/HistoryVoucher/HistoryVoucher";
import * as Types from "../constants/ActionTypes";

const initialState = {
  data: null,
  loading: false,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_DETAIL_BILL:
      state.data = <DetailBill billProps={action.billProps} />;
      return { ...state };
    case Types.LOAD_EMAIL_OR_PHONE_EDIT:
      state.data = <EmailOrPhoneEdit data={action.data} emailOrPhone={action.emailOrPhone} />;
      return { ...state };
    case Types.RETURN_PROFILE:
      state.data = null;
      return { ...state };
    case Types.VIEW_HISTORY_VOUCHER:
      state.data = <HistoryVoucher />;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
