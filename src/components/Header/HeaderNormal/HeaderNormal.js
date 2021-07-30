import React from "react";
import HeaderCenterNormal from "../HeaderIndex/HeaderCenter/HeaderCenterNormal";
import HeaderLeftNormal from "../HeaderIndex/HeaderLeft/HeaderLeftNormal";
import HeaderRight from "../HeaderIndex/HeaderRight/HeaderRight";

function HeaderNormal(props) {
  return (
    <div
      id="header"
      className="xl:w-4/5 bg-organce md:bg-transparent w-full mx-auto flex z-10"
    >
      <HeaderLeftNormal />
      <HeaderCenterNormal />
      <HeaderRight />
    </div>
  );
}

export default HeaderNormal;
