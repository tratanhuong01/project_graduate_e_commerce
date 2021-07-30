import React from "react";
import ItemColorProduct from "./ItemColorProduct/ItemColorProduct";

function ColorProduct(props) {
  return (
    <div className="w-full my-3">
      <p className="font-bold text-xl font-semibold">MÀU SẮC :</p>
      <div className="w-full flex">
        <ItemColorProduct />
      </div>
    </div>
  );
}

export default ColorProduct;
