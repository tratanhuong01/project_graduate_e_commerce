import React from "react";

function CostDetailBill(props) {
  return (
    <div className="w-full flex">
      <div className="w-3/4 flex flex-col text-xs text-gray-600">
        <div
          className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-100 border-r-2 pr-3"
        >
          Tổng tiền hàng
        </div>
        <div
          className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-100 border-r-2 pr-3"
        >
          Phí vận chuyển
        </div>
        <div
          className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-100 border-r-2 pr-3"
        >
          Giảm giá phí vận chuyển
        </div>
        <div
          className="w-full flex items-center justify-end py-6 border-b-2 border-solid 
        border-gray-100 border-r-2 pr-3"
        >
          Tổng số tiền
        </div>
      </div>
      <div className="w-1/4 flex flex-col text-xs text-gray-600">
        <div
          className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-100"
        >
          60.000đ
        </div>
        <div
          className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-100"
        >
          34.000đ
        </div>
        <div
          className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-100"
        >
          24.000đ
        </div>
        <div
          className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-100 text-organce text-2xl font-semibold"
        >
          40.000đ
        </div>
      </div>
    </div>
  );
}

export default CostDetailBill;
