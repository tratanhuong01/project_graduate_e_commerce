import React from "react";
import ItemMemory from "./ItemMemory/ItemMemory";

function Memory(props) {
  return (
    <>
      <p className="text-xl my-3 font-semibold">Kích thước</p>
      <ul className="w-full my-3 flex-wrap flex">
        <ItemMemory />
      </ul>
    </>
  );
}

export default Memory;
