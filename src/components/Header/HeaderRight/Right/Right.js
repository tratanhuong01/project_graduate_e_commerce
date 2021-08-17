import React from "react";

function Right(props) {
  return (
    <li className="flex px-4 py-6 relative toggel__hover__cart_show cursor-pointer">
      <i className="bx bx-heart text-3xl flex items-center "></i>
      <span
        className="w-5 h-5 rounded-full border border-solid text-white
        border-organce flex justify-center items-center font-bold 
        absolute right-2.5 bg-organce bottom-5 text-xs"
        style={{ transform: "translateY(2px)" }}
      >
        1
      </span>
    </li>
  );
}

export default Right;
