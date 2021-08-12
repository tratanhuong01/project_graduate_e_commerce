import React from "react";
import HeaderCenter from "./HeaderCenter/HeaderCenter";
import HeaderLeft from "./HeaderIndex/HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderIndex/HeaderRight/HeaderRight";

function HeaderNormal(props) {
  return (
    <div className="w-full bg-organce">
      <div className="xl:w-4/5 w-full mx-auto flex z-10 text-white">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </div>
    </div>
  );
}

export default HeaderNormal;
