import React from "react";
import FormRegister from "../../../components/General/ModalRegister/FormRegister/FormRegister";
import CloseModal from "../../../components/General/CloseModal/CloseModal";

function ModalRegister(props) {
  //
  //
  return (
    <div
      className="w-11/12 xl:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-lg z-50 animate__animated animate__fadeIn h-85vh"
    >
      <div
        className="w-full relative px-2 bg-white rounded-lg z-50 max-h-full 
         overflow-y-auto scrollbar-css"
      >
        <CloseModal />
        <div className="w-full mt-5 mb-2">
          <p className="w-full flex justify-center font-semibold text-3xl py-4">
            Đăng kí
          </p>
          <div className="w-full flex flex-col px-5">
            <FormRegister />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalRegister;
