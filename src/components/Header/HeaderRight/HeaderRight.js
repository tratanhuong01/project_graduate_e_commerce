import React from "react";
import useCart from "../../../hook/useCart";
import Center from "./Center/Center";
import Left from "./Left/Left";
import Right from "./Right/Right";

function HeaderRight(props) {
  //
  useCart();
  //
  return (
    <div className="w-2/12 lg:w-1/5 flex justify-end">
      <ul className="flex items-center">
        <Center />
        <Right />
        <Left />
      </ul>
    </div>
  );
}

export default HeaderRight;
