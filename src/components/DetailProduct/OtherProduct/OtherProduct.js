import React from "react";
import ItemProductOther from "../../General/ItemProduct/ItemProductOther";

function OtherProduct(props) {
  return (
    <div className="w-full my-5 z-0">
      <p className="font-semibold my-4 text-center text-4xl hover:text-organce cursor-pointer">
        Sản phẩm khác
      </p>
      <div className="w-full flex">
        <ItemProductOther />
        <ItemProductOther />
      </div>
    </div>
  );
}

export default OtherProduct;
