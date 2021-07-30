import React from "react";
import { useSelector } from "react-redux";

function Modal(props) {
  //
  const states = useSelector((state) => {
    return {
      modal: state.modal,
    };
  });
  const { modal } = states;
  const { DataModal, StateModal } = modal;
  //
  return (
    <div
      className={`w-full h-screen bg-opacity-50 bg-black top-0 left-0 fixed z-50 
      ${StateModal ? "" : "hidden"}`}
    >
      {DataModal}
    </div>
  );
}

export default Modal;
