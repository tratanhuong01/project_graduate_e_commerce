import * as Types from "../../constants/ActionTypes";

export const loadDetailBill = (bill) => {
  return {
    type: Types.LOAD_DETAIL_BILL,
    bill,
  };
};
export const returnProfile = () => {
  return {
    type: Types.RETURN_PROFILE,
  };
};
export const loadEmailEdit = () => {
  return {
    type: Types.LOAD_EMAIL_EDIT,
  };
};
export const loadPhoneEdit = () => {
  return {
    type: Types.LOAD_PHONE_EDIT,
  };
};
