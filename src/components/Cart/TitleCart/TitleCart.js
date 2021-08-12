import React from "react";

function TitleCart(props) {
  return (
    <div className="w-full bg-white hidden md:flex">
      <div
        className="w-10 flex justify-center border-2 border-solid border-gray-100 
        p-3 relative"
      >
        <input
          type="checkbox"
          className="transform scale-125 absolute top-1/3 left-2"
        />
      </div>
      <div
        className="w-2/12 flex justify-center border-2 border-solid border-gray-100 
        p-3"
      >
        Hình ảnh
      </div>
      <div className="w-7/12 flex justify-center">
        <div
          className="w-2/4 flex justify-center border-2 border-solid border-gray-100 
        p-3"
        >
          Tên sản phẩm
        </div>
        <div
          className="w-1/4 flex justify-center border-2 border-solid border-gray-100 
        p-3"
        >
          Đơn giá
        </div>
        <div
          className="w-1/4 flex justify-center border-2 border-solid border-gray-100 
        p-3"
        >
          Số lượng
        </div>
      </div>
      <div className="w-3/12 flex justify-center">
        <div
          className="w-2/3 flex justify-center border-2 border-solid border-gray-100 
        p-3"
        >
          Tổng tiền
        </div>
        <div
          className="w-1/3 flex justify-center border-2 border-solid border-gray-100 
        p-3"
        >
          Xóa
        </div>
      </div>
    </div>
  );
}

export default TitleCart;
