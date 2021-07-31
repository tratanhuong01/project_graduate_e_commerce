import React from "react";
import CloseModal from "../../../General/CloseModal/CloseModal";
import Button from "../Button/Button";

function ModalSearchGetAccount(props) {
  return (
    <div
      class="wrapper-scrollbar w-11/12 fixed top-1/2 left-1/2 p-4 opacity-100 bg-white z-50 
        border-2 border-solid border-gray-300 sm:w-4/5 sm:mt-12 lg:w-3/5 xl:w-5/12 xl:mt-4 transform 
        -translate-y-1/2 -translate-x-1/2"
    >
      <div class="w-full">
        <div class="w-full">
          <div class="w-full text-center">
            <p class="text-2xl font-semibold p-2.5 dark:text-white">
              Quên tài khoản
            </p>
            <CloseModal />
          </div>
        </div>
        <div class="w-70per my-4 mx-auto">
          <p>Vui lòng nhập số điện thoại hoặc email để lấy mật khẩu</p>
          <input
            class="w-full p-4 my-4"
            type="text"
            placeholder="Email hoặc số điện thoại"
          />
        </div>
        <p class="w-70per text-red-600 font-semibold  py-4 mx-auto"></p>
        <hr />
        <div class="w-full mt-4 text-right">
          <Button
            backgroundColor={"bg-organce"}
            color={" text-white "}
            label={"Tìm Kiếm"}
            addClass={"mr-4"}
          />
          <Button backgroundColor={""} color={"text-gray-800"} label={"Hủy"} />
        </div>
      </div>
    </div>
  );
}

export default ModalSearchGetAccount;
