import * as Types from "../../constants/ActionTypes";

export const loadDetailBill = (billProps) => {
  return {
    type: Types.LOAD_DETAIL_BILL,
    billProps,
  };
};

export const returnProfile = () => {
  return {
    type: Types.RETURN_PROFILE,
  };
};

export const loadEmailEdit = (email) => {
  return {
    type: Types.LOAD_EMAIL_EDIT,
    email,
  };
};

export const loadPhoneEdit = (phone) => {
  return {
    type: Types.LOAD_PHONE_EDIT,
    phone,
  };
};

export const viewHistoryVoucher = () => {
  return {
    type: Types.VIEW_HISTORY_VOUCHER,
  };
};
