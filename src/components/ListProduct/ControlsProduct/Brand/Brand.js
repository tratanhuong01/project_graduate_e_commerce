import React from "react";
import ItemBrand from "./ItemBrand/ItemBrand";

function Brand(props) {
  return (
    <>
      <p className="text-xl my-3 font-semibold">Thương hiệu</p>
      <ul className="my-3 w-full max-h-72 overflow-y-auto">
        <ItemBrand />
      </ul>
    </>
  );
}

export default Brand;
