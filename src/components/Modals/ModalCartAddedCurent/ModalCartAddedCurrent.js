import React from "react";
import ModalCartAddedTop from "./ModalCartAddedTop/ModalCartAddedTop";
import ModalCartAddedBottom from "./ModalCartAddedBottom/ModalCartAddedBottom";

function ModalCartAddedCurrent(props) {
  //
  const { product } = props;
  //
  return (
    <div
      className="w-11/12 xl:w-1/2 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      rounded-lg z-50 animate__animated animate__fadeIn"
    >
      <div className="w-full relative bg-white dark:bg-dark-second rounded-lg">
        <ModalCartAddedTop product={product} />
        <ModalCartAddedBottom product={product} />
      </div>
    </div>
  );
}

export default ModalCartAddedCurrent;
