import React from "react";
import FormRegister from "./FormRegister/FormRegister";
import CloseModal from "../../../General/CloseModal/CloseModal";
import LoadingModal from "../../../General/Loading/LoadingModal/LoadingModal";
import { useSelector } from "react-redux";

function ModalRegister(props) {
  //
  const states = useSelector((state) => {
    return {
      modal: state.modal,
    };
  });
  const { modal } = states;
  //
  return (
    <div
      className="w-11/12 xl:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-lg z-50 animate__animated animate__fadeIn h-85vh"
    >
      {modal.loading && <LoadingModal />}
      <div
        className="w-full relative px-2 bg-white rounded-lg max-h-full 
         overflow-y-auto scrollbar-css"
      >
        <CloseModal />
        <div className="w-full mb-2">
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
