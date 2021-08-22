import React from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../../constants/Config";
import logo from "../../../../assets/images/logo.png";
function Logo(props) {
  return (
    <Link
      to={Config.PAGE_INDEX}
      className="mb-3 font-semibold text-organce my-4"
    >
      {" "}
      <img src={logo} alt="" className="w-48" />
    </Link>
  );
}

export default Logo;
