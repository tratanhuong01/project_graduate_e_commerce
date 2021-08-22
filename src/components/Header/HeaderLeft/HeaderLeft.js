import { Link } from "react-router-dom";
import * as Config from "../../../constants/Config";
import React from "react";
import logo from "../../../assets/images/logo.png";
function HeaderLeft(props) {
  //
  //
  return (
    <div className="w-3/5 md:w-3/12 lg:w-1/5 flex justify-center">
      <Link
        to={Config.PAGE_INDEX}
        className="w-8/12 md:w-full lg:w-10/12 flex items-center cursor-pointer"
      >
        <img src={logo} alt="" className="w-full" />
      </Link>
    </div>
  );
}

export default HeaderLeft;
