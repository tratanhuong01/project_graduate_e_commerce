import DetailBill from "../components/Profile/ProfileRight/DetailBill/DetailBill";
import EmailEdit from "../components/Profile/ProfileRight/MyAccount/FormAccount/EmailEdit/EmailEdit";
import PhoneEdit from "../components/Profile/ProfileRight/MyAccount/FormAccount/PhoneEdit/PhoneEdit";
import * as Types from "../constants/ActionTypes";

const initialState = {
  data: null,
  loading: false,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_DETAIL_BILL:
      state.data = <DetailBill bill={action.bill} />;
      return { ...state };
    case Types.LOAD_EMAIL_EDIT:
      state.data = <EmailEdit />;
      return { ...state };
    case Types.LOAD_PHONE_EDIT:
      state.data = <PhoneEdit />;
      return { ...state };
    case Types.RETURN_PROFILE:
      state.data = null;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
