import React from "react";
import FormRegister from "./FormRegister/FormRegister";
import ModalWrapper from "../../../../containers/ModalWrapper";

function ModalRegister(props) {
  //
  //
  return (
    <ModalWrapper
      styleChildren={{
        height: "85vh",
        maxHeight: "85vh",
        overflowY: "auto",
        overflowX: "hidden",
      }}
      title="Đăng kí"
      className="w-11/12 xl:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      rounded-lg z-50 animate__animated animate__fadeIn bg-white dark:bg-dark-second dark:text-white"
    >
      <div className="w-full flex flex-col px-5">
        <FormRegister />
      </div>
    </ModalWrapper>
  );
}

export default ModalRegister;
