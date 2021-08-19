import React from "react";
import { useDispatch } from "react-redux";
import * as profilesAction from "../../../../../actions/profile/index";

function ItemNotify(props) {
  //
  const dispatch = useDispatch();
  //
  return (
    <div
      onClick={() => dispatch(profilesAction.loadDetailBill(null))}
      className="w-full my-2 p-2 flex items-center hover:bg-gray-100 cursor-pointer"
    >
      <div className="w-3/4 flex items-center">
        <img
          src="https://cf.shopee.vn/file/30cfbf2972827fc710796675e7c4f281"
          alt=""
          className="w-24 h-24 p-1 object-cover rounded-lg"
        />
        <div className="flex text-gray-600 flex-col pl-4">
          <p className="font-semibold text-xm text-green-500 mb-1">
            Giao hàng thành công
          </p>
          <p className="font-semibold mb-1 text-sm">
            Kiện hàng EF496076619VN của đơn hàng 210421KXWSW8C0 đã giao thành
            công đến bạn.
          </p>
          <p className="font-semibold text-xs">20:15 18-08-2021</p>
        </div>
      </div>
      <div className="w-1/4 flex items-center justify-end">
        <button
          className="border-2 border-solid border-gray-300 font-semibold 
          text-gray-600 px-4 py-1.5 text-sm hover:border-organce hover:text-organce"
        >
          Xem chi tiết đơn hàng
        </button>
      </div>
    </div>
  );
}

export default ItemNotify;
