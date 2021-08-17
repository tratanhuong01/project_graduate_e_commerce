import React from "react";
// import Left from "./Left/Left";
import Center from "./Center/Center";
import Right from "./Right/Right";

function HeaderRight(props) {
  return (
    <div className="w-2/12 lg:w-1/5 flex justify-end">
      <ul className="flex items-center">
        {/* <Left /> */}
        <Center />
        <Right />
      </ul>
    </div>
  );
}

export default HeaderRight;
