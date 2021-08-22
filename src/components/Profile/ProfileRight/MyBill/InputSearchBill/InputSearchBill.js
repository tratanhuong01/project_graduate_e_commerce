import React from "react";

function InputSearchBill(props) {
  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="Tìm kiếm theo mã đơn hàng hoặc tên sản phẩm"
        className="w-full pl-10 p-2.5 my-2 bg-gray-200 dark:bg-dark-third"
      />
      <span className="bx bx-search text-2xl absolute top-5 left-2 text-gray-600"></span>
    </div>
  );
}

export default InputSearchBill;
