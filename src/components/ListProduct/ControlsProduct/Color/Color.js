import React from "react";
import ItemColor from "./ItemColor/ItemColor";

function Color(props) {
  return (
    <>
      <p className="text-xl my-3 font-semibold">Màu sắc</p>
      <ul className="w-full flex-wrap my-3 flex">
        <ItemColor />
        <ItemColor />
        <ItemColor />
        <ItemColor />
        <ItemColor />
      </ul>
    </>
  );
}

export default Color;
