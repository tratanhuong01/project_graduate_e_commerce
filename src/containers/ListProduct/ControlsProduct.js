import React from "react";
import Brand from "../../components/ListProduct/ControlsProduct/Brand/Brand";
import Color from "../../components/ListProduct/ControlsProduct/Color/Color";
import Memory from "../../components/ListProduct/ControlsProduct/Memory/Memory";
import Price from "../../components/ListProduct/ControlsProduct/Price/Price";

function ControlsProduct(props) {
  //
  const { show, setShow } = props;
  //
  return (
    <div
      className={`${
        show ? "" : "hidden"
      } xl:block w-72 lg:w-1/4 lg:relative fixed top-0 lg:top-auto list__product__left 
      lg:right-auto right-0 lg:bg-transparent bg-white z-main lg:z-0 lg:block lg:pr-4`}
    >
      <span
        onClick={() => setShow(!show)}
        className="rounded-full py-0.5 pb-1.5 z-50 px-2.5 font-bold text-xl bg-gray-300 cursor-pointer 
        hover:bg-gray-500 hover:text-white flex justify-center items-center absolute top-3 right-3 
        lg:hidden"
      >
        &times;
      </span>
      <div
        className="w-full h-screen lg:h-auto lg:overflow-hidden overflow-auto relative p-4 
            lg:p-0"
      >
        <p className="mb-6 text-2xl font-semibold">Bộ lọc</p>
        <Brand />
        <Color />
        <Memory />
        <Price />
      </div>
    </div>
  );
}

export default ControlsProduct;
