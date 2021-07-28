import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../../constants/Config";
class HeaderCenterNormal extends Component {
  render() {
    return (
      <div className="w-1/3 md:w-1/3 flex justify-center relative">
        <Link
          to={Config.PAGE_INDEX}
          className="w-4/5 md:w-4/5 xl:w-7/12 p-3 flex items-center"
        >
          <img src={Config.LOGO} className="w-full" alt="" />
        </Link>
        <Link
          to="/"
          className="absolute text-4xl top-1/2 transform -translate-y-1/2 left-48 
          font-bold hidden xl:block"
        >
          {Config.NAME_LOGO}
        </Link>
      </div>
    );
  }
}

export default HeaderCenterNormal;
