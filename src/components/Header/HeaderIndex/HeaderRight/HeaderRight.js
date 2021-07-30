import React from "react";
import Left from "./Left/Left";
import Center from "./Center/Center";
import Right from "./Right/Right";

function HeaderRight(props) {
  return (
    <div className="w-1/3 flex justify-end">
      <ul className="flex items-center">
        <Left />
        <Center />
        <Right />
      </ul>
    </div>
  );
}

export default HeaderRight;
