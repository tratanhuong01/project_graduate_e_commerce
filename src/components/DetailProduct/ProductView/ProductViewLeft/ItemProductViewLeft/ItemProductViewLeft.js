import React from "react";

function ItemProductViewLeft(props) {
  return (
    <li className="w-full p-3">
      <img
        src="/images/products/5.png"
        className={
          "w-full border-2 border-solid border-orangce hover:border-organce cursor-pointer"
        }
        alt=""
      />
    </li>
  );
}

export default ItemProductViewLeft;
