import React from "react";

function ItemStatusDetailBill(props) {
  //
  const { left, right } = props;
  //
  return (
    <div
      className="flex items-center justify-center flex-col"
      style={{ width: "calc(100% / 5)" }}
    >
      <div
        className="w-16 h-16 p-1 border-4 border-solid border-green rounded-full flex 
        items-center justify-center relative"
      >
        {left && (
          <span className="w-20 bg-green h-1 absolute right-full"></span>
        )}
        <i class="fas fa-file-invoice text-3xl text-green"></i>
        {right && (
          <span className="w-20 bg-green h-1 absolute left-full"></span>
        )}
      </div>
      <p className="text-gray-600 font-semibold my-1 text-sm">
        Đơn hàng đã đặt
      </p>
      <p className="text-gray-400 font-semibold text-xs">16:30:30 16-08-2021</p>
    </div>
  );
}

export default ItemStatusDetailBill;
