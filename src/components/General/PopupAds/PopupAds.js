import React from "react";

function PopupAds(props) {
  //
  //
  return (
    <div
      className="w-11/12 xl:w-1/4 p-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      rounded-lg z-50 animate__animated animate__fadeIn"
    >
      <div className="w-full relative px-2 py-4">
        <span
          className="rounded-full py-0.5 pb-1.5 px-2.5 font-bold text-xl bg-gray-300 cursor-pointer
          hover:bg-gray-500 hover:text-white flex justify-center items-center absolute top-3 right-0"
        >
          &times;
        </span>
        <img
          src="/images/first.png"
          alt=""
          className="w-full h-120 object-cover cursor-pointer"
        />
      </div>
    </div>
  );
}

export default PopupAds;
