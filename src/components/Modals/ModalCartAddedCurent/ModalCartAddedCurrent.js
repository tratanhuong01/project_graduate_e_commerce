import React from "react";
import ModalCartAddedTop from "../ModalCartAddedCurent/ModalCartAddedTop";
import ModalCartAddedBottom from "../ModalCartAddedCurent/ModalCartAddedBottom";

function ModalCartAddedCurrent(props) {
  //
  //
  return (
    <div
      className="w-11/12 xl:w-1/2 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      rounded-lg z-50 animate__animated animate__fadeIn"
    >
      <div className="w-full relative bg-white rounded-lg">
        <ModalCartAddedTop />
        <ModalCartAddedBottom />
      </div>
    </div>
  );
}

export default ModalCartAddedCurrent;
