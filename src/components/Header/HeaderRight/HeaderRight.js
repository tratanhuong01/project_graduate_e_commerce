import React from "react";
import useCartAndWishList from "../../../hook/useCartAndWishList";
import Center from "./Center/Center";
import Left from "./Left/Left";
import Right from "./Right/Right";

function HeaderRight(props) {
  //
  useCartAndWishList();
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
