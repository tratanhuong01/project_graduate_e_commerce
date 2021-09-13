import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LOAD_DETAIL_BILL,
  SET_LOADING_BILL_USER,
} from "../../../../../../constants/ActionTypes";
import * as billsAction from "../../../../../../actions/bill/index";
function ItemBillBottom(props) {
  //
  const { bill, data } = props;
  const { user, bills } = useSelector((state) => {
    return {
      user: state.user,
      bills: state.bills,
    };
  });
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full flex items-center text-gray-600 dark:text-gray-300 mb-5">
      <div className="w-1/3 flex py-1 font-semibold flex-col">
        <span className="text-xs">Sản phẩm này sẽ được gửi đi trước</span>
        <span className="text-green-500 text-xs">20-08-2021</span>
      </div>
      <div className="w-2/3 flex justify-end items-center">
        {bill.bill.status === 3 && (
          <button
            className="border-2 border-solid border-organce px-4 py-2 text-white mr-6 font-semibold 
            text-sm bg-organce hidden"
          >
            Mua lần nữa
          </button>
        )}
        <button
          onClick={() => dispatch({ type: LOAD_DETAIL_BILL, billProps: bill })}
          type="button"
          className="border-2 border-solid border-organce px-4 py-2 font-semibold 
          text-sm "
        >
          Xem chi tiết đơn hàng
        </button>
        {bill.bill.status === 0 && (
          <button
            onClick={() => {
              dispatch({ type: SET_LOADING_BILL_USER, status: true });
              dispatch(
                billsAction.cancelOrderRequest({
                  user,
                  index: bills.index,
                  type: data.type,
                  bill: bill,
                })
              );
            }}
            className="border-2 ml-6 border-solid border-organce px-4 py-2 font-semibold text-sm"
          >
            Hủy đơn hàng
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemBillBottom;
