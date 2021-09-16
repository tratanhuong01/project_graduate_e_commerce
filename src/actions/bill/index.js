import * as Types from "../../constants/ActionTypes";
import * as billApi from "../../api/billApi";

export const loadBillsUserRequest = (data) => {
  return async (dispatch) => {
    const list = await billApi.getBillMain(data.type, data.user.id);
    const listCurrent = await billApi.getBillLimit(
      data.type,
      data.user.id,
      data.index,
      5
    );
    dispatch(loadBillsUser(list.data, listCurrent.data, data.index));
    dispatch(setLoadingBillUser(false));
  };
};

export const loadBillsUser = (list, listCurrent, index) => {
  return {
    type: Types.LOAD_BILL_USER,
    list,
    listCurrent,
    index,
  };
};

export const setLoadingBillUser = (status) => {
  return {
    type: Types.SET_LOADING_BILL_USER,
    status,
  };
};

export const cancelOrderRequest = (data) => {
  return async (dispatch) => {
    await billApi.cancelBill(data.bill.bill.id);
    dispatch(loadBillsUserRequest(data));
  };
};

export const loadBillsUserByIndexRequest = (data) => {
  return async (dispatch) => {
    const result = await billApi.getBillLimit(
      data.type,
      data.user.id,
      data.index,
      5
    );
    dispatch(loadBillsUserByIndex(data.index, result.data));
    dispatch(setLoadingBillUser(false));
  };
};

export const loadBillsUserByIndex = (index, list) => {
  return {
    type: Types.LOAD_BILL_USER_BY_INDEX,
    index,
    list,
  };
};

export const searchBillRequest = (data) => {
  return async (dispatch) => {
    const list = await billApi.searchBillMain(data.keyword, data.user.id);
    const listCurrent = await billApi.searchBillLimit(
      data.keyword,
      data.user.id,
      0,
      5
    );
    dispatch(loadBillsUser(list.data, listCurrent.data, 0));
    dispatch(setLoadingBillUser(false));
  };
};
