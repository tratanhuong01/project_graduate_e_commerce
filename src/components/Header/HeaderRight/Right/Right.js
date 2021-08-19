import React from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../../constants/Config";

function Right(props) {
  //
  //
  return (
    <li className="flex px-4 py-6 relative toggel__hover__cart_show cursor-pointer">
      <Link to={Config.PAGE_WISHLIST}>
        <i className="bx bx-heart text-3xl flex items-center "></i>
      </Link>
      <span
        className="w-5 h-5 rounded-full border border-solid text-white
        border-organce flex justify-center items-center font-bold 
        absolute right-2.5 bg-organce bottom-5 text-xs"
      >
        0
      </span>
    </li>
  );
}

export default Right;
