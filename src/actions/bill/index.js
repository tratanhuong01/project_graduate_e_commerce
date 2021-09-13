import * as Types from "../../constants/ActionTypes";
import api from "../../Utils/api";

export const loadBillsUserRequest = (data) => {
  return async (dispatch) => {
    const list = await api(
      `billsAll?type=${data.type}&idUser=${data.user.id}`,
      "GET",
      null
    );
    const listCurrent = await api(
      `bills?type=${data.type}&idUser=${data.user.id}&offset=${
        data.index * 5
      }&limit=${5}`,
      "GET",
      null
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
    await api(
      `bills/update/status/?idBill=${data.bill.bill.id}&status=-1`,
      "GET",
      null
    );
    dispatch(loadBillsUserRequest(data));
  };
};

export const loadBillsUserByIndexRequest = (data) => {
  return async (dispatch) => {
    const result = await api(
      `bills?type=${data.type}&idUser=${data.user.id}&offset=${
        data.index * 5
      }&limit=${5}`,
      "GET",
      null
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
    // const list = await api(
    //   `bills/search/?keyword=${data.keyword}&idUser=${
    //     data.idUser
    //   }&offset=${0}&limit=5`,
    //   "GET",
    //   null
    // );
    const listCurrent = await api(
      `bills/search/?keyword=${data.keyword}&idUser=${
        data.idUser
      }&offset=${0}&limit=5`,
      "GET",
      null
    );
    dispatch(loadBillsUser([], listCurrent.data, 0));
    dispatch(setLoadingBillUser(false));
  };
};
