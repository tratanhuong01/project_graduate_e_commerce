import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../../constants/Config";
class HeaderCenter extends Component {
  render() {
    return (
      <div className="w-1/2 md:w-1/3 flex justify-center">
        <Link
          to={Config.PAGE_INDEX}
          className="w-4/5 md:w-3/5 p-3 flex items-center cursor-pointer"
        >
          <img src={Config.LOGO} alt="" className="w-full" />
        </Link>
      </div>
    );
  }
}

export default HeaderCenter;
