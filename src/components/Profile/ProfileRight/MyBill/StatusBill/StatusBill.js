import React from "react";

function StatusBill(props) {
  //
  //
  return (
    <div className="w-full flex text-gray-600 shadow-md">
      <div
        style={{ width: "calc(100% / 6)" }}
        className="flex items-center justify-center border-organce pb-3 cursor-pointer 
        font-semibold text-organce border-b-2 border-solid px-4 mx-1"
      >
        Tất cả
      </div>
      <div
        style={{ width: "calc(100% / 6)" }}
        className="flex items-center justify-center border-white pb-3 cursor-pointer 
        font-semibold hover:text-organce border-b-2 border-solid  px-4 mx-1 hover:border-organce"
      >
        Chờ xác nhận
      </div>
      <div
        style={{ width: "calc(100% / 6)" }}
        className="flex items-center justify-center border-white pb-3 cursor-pointer 
        font-semibold hover:text-organce border-b-2 border-solid px-4 mx-1 hover:border-organce"
      >
        Chờ lấy hàng
      </div>
      <div
        style={{ width: "calc(100% / 6)" }}
        className="flex items-center justify-center border-white pb-3 cursor-pointer 
        font-semibold hover:text-organce border-b-2 border-solid px-4 mx-1 hover:border-organce"
      >
        Đang giao
      </div>
      <div
        style={{ width: "calc(100% / 6)" }}
        className="flex items-center justify-center border-white pb-3 cursor-pointer 
       font-semibold hover:text-organce border-b-2 border-solid  px-4 mx-1 hover:border-organce"
      >
        Đã giao
      </div>
      <div
        style={{ width: "calc(100% / 6)" }}
        className="flex items-center justify-center border-white pb-3 cursor-pointer 
        font-semibold hover:text-organce border-b-2 border-solid px-4 mx-1 hover:border-organce"
      >
        Đã hủy
      </div>
    </div>
  );
}

export default StatusBill;
