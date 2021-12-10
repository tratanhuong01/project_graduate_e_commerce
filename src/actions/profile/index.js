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

export const loadEmailOrPhoneEdit = (data, emailOrPhone) => {
  return {
    type: Types.LOAD_EMAIL_OR_PHONE_EDIT,
    data,
    emailOrPhone
  };
};


export const viewHistoryVoucher = () => {
  return {
    type: Types.VIEW_HISTORY_VOUCHER,
  };
};
