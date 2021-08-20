import React from "react";

function ItemBillTop(props) {
  return (
    <div className="w-full flex items-center my-2">
      <div className="w-1/3 flex">
        <span className="text-xs bg-organce py-1 px-2 text-white font-semibold rounded-full">
          Yêu thích
        </span>
      </div>
      <div className="w-2/3 flex justify-end text-sm">
        <div className="flex items-center text-green-500">
          <i className="fas fa-truck-moving text-xl mr-3"></i>
          Giao hàng thành công
        </div>
        <div className="flex items-center">
          <i className="far fa-question-circle text-xl mx-3 text-gray-600"></i>
          <span className="text-organce flex">ĐÃ GIAO</span>
        </div>
      </div>
    </div>
  );
}

export default ItemBillTop;
