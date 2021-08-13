import React from "react";

function ItemMemory(props) {
  return (
    <li
      className={`text-organce border-organce border-white w-10 h-10 m-2 bg-white flex justify-center border-2 border-solid hover:text-organce cursor-pointer hover:border-organce`}
    >
      <span className="flex items-center font-semibold">16GB</span>
    </li>
  );
}

export default ItemMemory;
