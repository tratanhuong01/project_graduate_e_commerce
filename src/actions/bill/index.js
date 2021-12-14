import * as Types from "../../constants/ActionTypes";
import * as billApi from "../../api/billApi";
import * as productApi from "../../api/productApi";
import api from "../../Utils/api";
import { IMAGE_BILL_CANCEL } from "../../constants/Config";

export const loadBillsUserRequest = (data, headers) => {
  return async (dispatch) => {
    try {
      const list = await billApi.getBillMain(data.type, data.user.id, headers);
      const listCurrent = await billApi.getBillLimit(
        data.type,
        data.user.id,
        data.index,
        5,
        headers
      );
      dispatch(loadBillsUser(list.data, listCurrent.data, data.index));
      dispatch(setLoadingBillUser(false));
    } catch (error) {
      throw error;
    }
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

export const cancelOrderRequest = (data, headers) => {
  return async (dispatch) => {
    try {
      await billApi.cancelBill(data.bill.bill.id, headers);
      const result = await billApi.getBillById(data.bill.bill.id);
      for (let index = 0; index < result.data.billDetailList.length; index++) {
        const element = result.data.billDetailList[index];
        await productApi.removeItemCurrentAndItemSold(
          element.billDetail.amount,
          element.productFull.idProduct
        );
      }
      await api(
        `notifies`,
        "POST",
        {
          id: null,
          userNotify: data.bill.bill.billUser,
          nameNotify: "Bạn đã hủy đơn hàng !",
          data: data.bill.bill.id,
          image: IMAGE_BILL_CANCEL,
          description: "🌀 Rất bạn về sự bất tiện này 🌀",
          timeCreated: null,
          isRead: 0,
        },
        headers
      );
      dispatch(loadBillsUserRequest(data, headers));
    } catch (error) {
      throw error;
    }
  };
};

export const loadBillsUserByIndexRequest = (data, headers) => {
  return async (dispatch) => {
    try {
      const result = await billApi.getBillLimit(
        data.type,
        data.user.id,
        data.index,
        5,
        headers
      );
      dispatch(loadBillsUserByIndex(data.index, result.data));
      dispatch(setLoadingBillUser(false));
    } catch (error) {
      throw error;
    }
  };
};

export const loadBillsUserByIndex = (index, list) => {
  return {
    type: Types.LOAD_BILL_USER_BY_INDEX,
    index,
    list,
  };
};

export const searchBillRequest = (data, headers) => {
  return async (dispatch) => {
    try {
      const list = await billApi.searchBillMain(
        data.keyword,
        data.user.id,
        headers
      );
      const listCurrent = await billApi.searchBillLimit(
        data.keyword,
        data.user.id,
        0,
        5,
        headers
      );
      dispatch(loadBillsUser(list.data, listCurrent.data, 0));
      dispatch(setLoadingBillUser(false));
    } catch (error) {
      throw error;
    }
  };
};
