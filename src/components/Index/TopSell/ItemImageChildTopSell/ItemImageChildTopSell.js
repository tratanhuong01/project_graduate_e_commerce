import React from "react";

function ItemImageChildTopSell(props) {
  return (
    <li className="w-48 h-48 p-2">
      <img
        src={"images/products/1.png"}
        className={`w-full p-1 cursor-pointer hover:border-gray-300
         border-2 border-solid border-white`}
        alt=""
      />
    </li>
  );
}

export default ItemImageChildTopSell;
