import React from "react";
import { useSelector } from "react-redux";

function Second(props) {
  //
  const states = useSelector((state) => {
    return {
      modal: state.modal,
    };
  });
  const { StateModal, DataModal } = states.modal;
  //
  if (StateModal === true) {
    document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
  } else {
    document
      .getElementsByTagName("body")[0]
      .classList.remove("overflow-hidden");
  }
  return (
    <div
      className={
        StateModal === true
          ? "w-full h-screen bg-opacity-50 bg-black top-0 left-0 fixed z-50"
          : "w-full h-screen bg-opacity-50 bg-black top-0 left-0 fixed hidden z-50"
      }
      id="second"
    >
      {DataModal}
    </div>
  );
}

export default Second;
