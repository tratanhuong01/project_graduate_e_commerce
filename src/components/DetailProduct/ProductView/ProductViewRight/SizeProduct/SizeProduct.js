import React from "react";
import ItemSizeProduct from "./ItemSizeProduct/ItemSizeProduct";

function SizeProduct(props) {
  return (
    <div className="w-full my-3">
      <p className="font-bold text-xl font-semibold">KÍCH THƯỚC :</p>
      <div className="w-full flex">
        <ItemSizeProduct />
      </div>
    </div>
  );
}

export default SizeProduct;
