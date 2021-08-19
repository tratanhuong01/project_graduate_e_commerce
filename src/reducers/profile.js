import Address from "../components/Profile/ProfileRight/MyAccount/Address/Address";
import Bank from "../components/Profile/ProfileRight/MyAccount/Bank/Bank";
import ChangePassword from "../components/Profile/ProfileRight/MyAccount/ChangePassword/ChangePassword";
import MyAccount from "../components/Profile/ProfileRight/MyAccount/MyAccount";
import * as Types from "../constants/ActionTypes";

const initialState = {
  data: "",
  loading: false,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_DATA_REQUEST:
      state.loading = true;
      return { ...state };
    case Types.LOAD_PROFILE_MAIN:
      state.loading = false;
      state.data = <MyAccount />;
      return { ...state };
    case Types.LOAD_ADDRESS:
      state.loading = false;
      state.data = <Address />;
      return { ...state };
    case Types.LOAD_BANK:
      state.loading = false;
      state.data = <Bank />;
      return { ...state };
    case Types.LOAD_CHANGE_PASSWORD:
      state.loading = false;
      state.data = <ChangePassword />;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
