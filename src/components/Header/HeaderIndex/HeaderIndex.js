import React, { Component } from "react";
import HeaderCenter from "../HeaderIndex/HeaderCenter/HeaderCenter";
import HeaderLeft from "../HeaderIndex/HeaderLeft/HeaderLeft";
import HeaderRight from "../HeaderIndex/HeaderRight/HeaderRight";
class HeaderIndex extends Component {
  render() {
    return (
      <div
        id="header"
        className="xl:w-4/5 bg-organce md:bg-transparent w-full mx-auto flex z-10 
        text-white"
      >
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </div>
    );
  }
}

export default HeaderIndex;
