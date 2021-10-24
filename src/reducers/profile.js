import DetailBill from "../components/Profile/ProfileRight/DetailBill/DetailBill";
import EmailEdit from "../components/Profile/ProfileRight/MyAccount/FormAccount/EmailEdit/EmailEdit";
import PhoneEdit from "../components/Profile/ProfileRight/MyAccount/FormAccount/PhoneEdit/PhoneEdit";
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
    case Types.LOAD_EMAIL_EDIT:
      state.data = <EmailEdit email={action.email} />;
      return { ...state };
    case Types.LOAD_PHONE_EDIT:
      state.data = <PhoneEdit phone={action.phone} />;
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
