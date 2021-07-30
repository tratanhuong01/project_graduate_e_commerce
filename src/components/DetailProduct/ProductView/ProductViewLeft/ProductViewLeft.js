import React from "react";
import ItemProductViewLeft from "../ProductViewLeft/ItemProductViewLeft/ItemProductViewLeft";

function ProductViewLeft(props) {
  return (
    <div className="w-full xl:w-7/12 flex">
      <ul className="w-2/12">
        <li className="text-center cursor-pointer">
          <i className="bx bx-caret-up text-2xl text-gray-700"></i>
        </li>
        <ItemProductViewLeft />
        <li className="text-center cursor-pointer">
          <i className="bx bx-caret-down text-2xl text-gray-700"></i>
        </li>
      </ul>
      <div className="w-10/12 pr-4">
        <div className="w-full border-2 border-gray-200 border-solid">
          <img
            id="images__product__detail"
            src={"/images/products/7.png"}
            alt=""
            className="w-full object-cover cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductViewLeft;
