import React from "react";
import ItemSize from "./ItemSize/ItemSize";

function Size(props) {
  return (
    <>
      <p className="text-xl my-3 font-semibold">Kích thước</p>
      <ul className="w-full my-3 flex-wrap flex">
        <ItemSize />
      </ul>
    </>
  );
}

export default Size;
