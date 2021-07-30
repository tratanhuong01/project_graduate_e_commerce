import React from "react";

function ItemColorProduct(props) {
  return (
    <div className="w-20 h-20 p-1 m-1 relative image-color">
      <div
        className="px-4 py-2 bg-organce font-semibold absolute -top-12 
        left-0 text-white text-xm color"
      >
        {"Cam"}
      </div>
      <img
        src={"/images/products/7.png"}
        className={`w-16 h-16 border-2 border-solid border-white hover:border-organce 
        cursor-pointer object-cover hover:border-organce`}
        alt=""
      />
    </div>
  );
}

export default ItemColorProduct;
