import React from "react";
import ModalWrapper from "../../../../containers/ModalWrapper";
import FormLogin from "./FormLogin/FormLogin";
import LoginWith from "./LoginWith/LoginWith";

function ModalLogin(props) {
  //
  //
  return (
    <ModalWrapper
      styleChildren={{ height: "55vh", maxHeight: "55vh" }}
      title="Đăng nhập"
      className="w-11/12 xl:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      rounded-lg z-50 animate__animated animate__fadeIn dark:bg-dark-second bg-white"
    >
      <div className="w-full flex flex-col px-5 h-full max-h-full">
        <FormLogin />
        <LoginWith />
      </div>
    </ModalWrapper>
  );
}

export default ModalLogin;
