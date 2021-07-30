import React from "react";

function ItemTypeProduct(props) {
  //
  //
  return (
    <li
      className={`w-1/3 p-1 ${"hover:border-gray-300"} border-2 border-white border-solid`}
    >
      <img
        src="/"
        className="w-full p-2 cursor-pointer 
          object-cover"
        alt=""
      ></img>
    </li>
  );
}

export default ItemTypeProduct;
