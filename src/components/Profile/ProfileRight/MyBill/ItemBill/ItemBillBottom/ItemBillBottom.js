import React from "react";
import { useDispatch } from "react-redux";
import { LOAD_DETAIL_BILL } from "../../../../../../constants/ActionTypes";
import api from "../../../../../../Utils/api";
function ItemBillBottom(props) {
  //
  const { bill, setBills } = props;
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
            onClick={async () => {
              await api(
                `bills/update/status/?idBill=${bill.bill.id}&status=-1`,
                "GET",
                null
              );
              setBills(null);
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
