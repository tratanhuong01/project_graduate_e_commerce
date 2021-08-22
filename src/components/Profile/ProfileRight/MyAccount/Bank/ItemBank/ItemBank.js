import React from "react";

function ItemBank(props) {
  return (
    <div
      className="w-full flex my-5 items-center relative pb-3 border-solid 
    border-gray-200 border-b-2 dark:text-white text-gray-600"
    >
      <div
        className="w-20 h-20 p-1 border-2 border-solid border-gray-300 
          flex items-center justify-center rounded-lg"
      >
        <div className="w-16 h-16 p-0.5 bg-gray-200 items-center flex justify-center">
          <i className="bx bxs-bank text-6xl text-gray-100"></i>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center ml-2 ml-4 text-sm lg:text-xm">
        <p className="text-center">VIETINBANK - NH CONG THUONG VIET NAM</p>
        <p>STK : 10*******6</p>
        <p>Họ Và Tên : Tra Tan Huong</p>
        <p>Chi nhánh : CN Quang Nam</p>
      </div>
      <div
        className="text-sm absolute top-0 flex flex-col right-0 
      lg:relative lg:top-auto lg:block lg:ml-6 "
      >
        <span className="mb-0.5">Đã kiểm tra</span>
        <button
          className="rounded-full px-5 py-1 bg-green-500 text-white font-semibold lg:ml-4 
        text-xs "
        >
          Mặc định
        </button>
      </div>
      <div className="absolute right-0 bottom-2 lg:bottom-auto">
        <span className="mx-2 underline cursor-pointer">Xóa</span>
        <button className="border-2 border-solid border-gray-300 px-3 py-1 text-sm lg:text-xm lg:py-2 ml-5">
          Thiết lập mặc định
        </button>
      </div>
    </div>
  );
}

export default ItemBank;
