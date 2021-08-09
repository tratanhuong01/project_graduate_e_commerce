import React from "react";

function ItemImageChildTopSell(props) {
  return (
    <li className="w-36 h-36 p-2">
      <img
        src={
          "http://product.hstatic.net/1000329106/product/iphone-11-green-600x600_a67ef78c81764d87a1913092dfb68789_grande.png"
        }
        className={`w-full p-1 cursor-pointer hover:border-gray-300
         border-2 border-solid border-white`}
        alt=""
      />
    </li>
  );
}

export default ItemImageChildTopSell;
