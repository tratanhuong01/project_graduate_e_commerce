import React from "react";

function FormInfoPayment(props) {
  //
  //
  return (
    <form action="" method="post" className="w-full dark:text-white">
      <input
        type="text"
        className="w-full p-2.5 rounded-lg my-3 border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
        placeholder="Email"
      />
      <input
        type="text"
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
        placeholder="Họ và tên"
      />
      <input
        type="text"
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
        placeholder="Số điện thoại"
      />
      <input
        type="text"
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
        placeholder="Địa chỉ"
      />
      <select
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
      >
        <option value="">Chọn tỉnh / thành phố</option>
      </select>
      <select
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
      >
        <option value="">Chọn huyện / quận</option>
      </select>
      <select
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
      >
        <option value="">Chọn xã / phường</option>
      </select>
      <textarea
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 resize-none h-20 dark:bg-dark-third dark:border-dark-third"
        name=""
        placeholder="Ghi chú (tùy chọn).."
      ></textarea>
    </form>
  );
}

export default FormInfoPayment;
