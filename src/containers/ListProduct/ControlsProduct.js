import React from "react";

function ControlsProduct(props) {
  //
  //
  return (
    <div
      id="modal__left"
      className="hidden xl:block w-72 lg:w-1/4 lg:relative fixed top-0 lg:top-auto 
        lg:right-auto right-0 lg:bg-transparent bg-white z-50 lg:z-0 lg:block lg:pr-4"
    >
      <div
        className="w-full h-screen lg:h-auto lg:overflow-hidden overflow-auto relative p-4 
            lg:p-0"
      >
        <p className="mb-6 text-2xl font-semibold">Bộ lọc</p>
      </div>
    </div>
  );
}

export default ControlsProduct;
