import React from "react";

function Logo(props) {
  return (
    <div
      className="w-full text-xl font-bold flex border-solid border-gray-300 py-2 px-6 
    justify-center -ml-5 bg-white"
    >
      <img
        src="../../../images/logo.png"
        className="flex h-14 object-cover cursor-pointer"
      />
      <span
        className="font-bold text-2xl absolute top-5 left-36 text-gray-700 
      cursor-pointer"
      >
        XSMART
      </span>
    </div>
  );
}

export default Logo;
