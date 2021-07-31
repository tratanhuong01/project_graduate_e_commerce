import React from "react";

function ItemNotify(props) {
  return (
    <div
      className="w-full px-4 py-4 flex items-center text-white  
      relative rounded-lg cursor-pointer bg-organce"
    >
      <span class="bx bxs-bell-ring text-2xl"></span>
      <div className="ml-4">
        <span className="text-sm font-semibold flex">
          Thêm vào giỏ hàng thành công
        </span>
        <span className="mt-1 text-xs">Kiểm tra giỏ hàng của bạn</span>
      </div>
      <span
        className="text-xm font-bold absolute top-1 right-2 
      cursor-pointer"
      >
        &times;
      </span>
    </div>
  );
}

export default ItemNotify;
