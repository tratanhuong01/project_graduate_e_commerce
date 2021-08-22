import React from "react";
import CloseModal from "../../../General/CloseModal/CloseModal";
import FormLogin from "./FormLogin/FormLogin";
import LoginWith from "./LoginWith/LoginWith";

function ModalLogin(props) {
  //
  //
  return (
    <div
      className="w-11/12 xl:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      rounded-lg z-50 animate__animated animate__fadeIn dark:bg-dark-second"
    >
      <div className="w-full relative px-2 py-4 dark:text-white rounded-lg">
        <CloseModal />
        <div className="w-full mt-5 mb-2">
          <p className="w-full flex justify-center font-semibold text-3xl pt-4 pb-12">
            Đăng nhập
          </p>
          <div className="w-full flex flex-col px-5">
            <FormLogin />
            <LoginWith />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
