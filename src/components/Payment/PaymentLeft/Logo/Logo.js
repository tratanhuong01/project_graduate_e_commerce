import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../../constants/Config";
class Logo extends Component {
  render() {
    return (
      <Link
        to={Config.PAGE_INDEX}
        className="text-5xl mb-3 font-semibold text-organce my-4"
      >
        Xsmart
      </Link>
    );
  }
}

export default Logo;
