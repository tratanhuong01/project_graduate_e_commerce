import React from "react";
import CloseModal from "../../../General/CloseModal/CloseModal";
import Button from "../Button/Button";

function ModalTypeCode(props) {
  //
  //
  return (
    <div
      className="w-11/12 absolute top-1/2 left-1/2 py-4 px-6 opacity-100 bg-white z-50 border-2 border-solid 
    border-gray-300 sm:w-4/5 sm:mt-12 lg:w-3/5 xl:w-2/5 xl:mt-4 transform -translate-x-1/2 -translate-y-1/2 
    rounded-lg z-50"
    >
      <div className="w-full mx-auto">
        <div className="w-full text-center">
          <p className="text-2xl font-bold pb-2 dark:text-white">
            Xác nhận tài khoản
          </p>
          <CloseModal />
        </div>
      </div>
      <div className="w-full">
        <div className="mx-auto my-4">
          <p className="">
            Hệ thống đã gửi một mã gồm 6 chữ số đến
            <span className="font-bold">{" tratanhuong01@gmail.com "} </span>
            .Bạn cần nhập đúng mã xác nhận từ email hoặc số điện thoại này để
            kích hoạt tài khoản.
          </p>
          <input
            className="w-full p-4 my-4 border-2 border-solid border-gray-400 rounded-full"
            type="text"
            placeholder="Nhập mã có 6 chữ số.."
          />
          <ul className="w-full mb-4 mt-4">
            <li className="w-full text-red-600 value_error"></li>
          </ul>
        </div>
        <hr />
        <div className="w-full text-right">
          <Button
            backgroundColor="bg-gray-500"
            color="text-white"
            label="Gửi lại"
            addClass="mr-4"
          />
          <Button
            backgroundColor="bg-organce"
            color="text-white"
            label="Xác nhận"
            addClass=""
          />
        </div>
      </div>
    </div>
  );
}

export default ModalTypeCode;