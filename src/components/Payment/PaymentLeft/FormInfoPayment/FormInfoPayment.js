import React, { Component } from "react";

class FormInfoPayment extends Component {
  render() {
    return (
      <form action="" method="post" className="w-full">
        <input
          type="text"
          className="w-full p-2.5 rounded-lg my-3
        border-2 border-solid border-gray-200"
          placeholder="Email"
        />
        <input
          type="text"
          className="w-full p-2.5 rounded-lg mb-3
        border-2 border-solid border-gray-200"
          placeholder="Họ và tên"
        />
        <input
          type="text"
          className="w-full p-2.5 rounded-lg mb-3
        border-2 border-solid border-gray-200"
          placeholder="Số điện thoại"
        />
        <input
          type="text"
          className="w-full p-2.5 rounded-lg mb-3
        border-2 border-solid border-gray-200"
          placeholder="Địa chỉ"
        />
        <select
          className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid 
        border-gray-200"
        >
          <option value="">Chọn tỉnh / thành phố</option>
        </select>
        <select
          className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid 
        border-gray-200"
        >
          <option value="">Chọn huyện / quận</option>
        </select>
        <select
          className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid 
        border-gray-200"
        >
          <option value="">Chọn xã / phường</option>
        </select>
        <textarea
          className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid 
        border-gray-200 resize-none h-20"
          name=""
          placeholder="Ghi chú (tùy chọn).."
        ></textarea>
      </form>
    );
  }
}

export default FormInfoPayment;
