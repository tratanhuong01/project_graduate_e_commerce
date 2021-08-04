import React from "react";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

function HeaderTop(props) {
  return (
    <div className="w-full flex">
      <HeaderLeft />
      <div className="w-2/4"></div>
      <HeaderRight />
    </div>
  );
}

export default HeaderTop;
