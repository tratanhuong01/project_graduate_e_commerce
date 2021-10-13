import React from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import * as modalsAction from "../../../../actions/modal/index";
import ModalWrapper from "../../../../containers/ModalWrapper";
function ModalSearchGetAccount(props) {
  //
  const dispatch = useDispatch();
  //
  return (
    <ModalWrapper
      title="Quên tài khoản"
      className="wrapper-scrollbar w-11/12 fixed top-1/2 left-1/2 opacity-100 bg-white z-50 
        border-2 border-solid border-gray-300 sm:w-4/5 sm:mt-12 lg:w-3/5 xl:w-5/12 xl:mt-4 transform 
        -translate-y-1/2 -translate-x-1/2 rounded-lg dark:border-dark-third shadow-lg "
    >
      <div className="w-4/5 my-4 mx-auto px-3">
        <p className="pl-4 dark:text-gray-300">
          Vui lòng nhập số điện thoại hoặc email để lấy mật khẩu
        </p>
        <input
          className="w-full p-4 my-4 border-2 border-solid border-gray-200 focus:border-blue-500 
          rounded-full dark:bg-dark-third dark:text-gray-300"
          type="text"
          placeholder="Email hoặc số điện thoại"
          spellCheck={false}
        />
      </div>
      <p className="w-4/5 text-red-600 font-semibold  py-4 mx-auto px-4"></p>
      <hr />
      <div className="w-full my-4 text-right px-4">
        <Button
          backgroundColor={"bg-organce"}
          color={" text-white "}
          label={"Tìm Kiếm"}
          onClick={() => dispatch(modalsAction.openModalForgotPassword())}
          addclassName={"mr-4"}
        />
        <Button
          onClick={() => dispatch(modalsAction.closeModal())}
          backgroundColor={"bg-gray-600 ml-4"}
          color={"text-white"}
          label={"Hủy"}
        />
      </div>
    </ModalWrapper>
  );
}

export default ModalSearchGetAccount;
