import React from "react";

function ItemGroupProduct(props) {
  return (
    <div className="px-2 mx-2 flex flex-wrap justify-center w-32">
      <div className="w-16 h-16 bg-gray-100 flex justify-center items-center rounded-full border-2 border-solid hover:border-organce cursor-pointer shadow-lg">
        <img
          src="https://cdn.tgdd.vn/Category/60/icon-op-lung-100x100-60x60.png"
          alt=""
          className="w-14 h-14 rounded-full "
        />
      </div>
      <p className="text-gray-600 font-semibold text-sm my-2 cursor-pointer hover:text-organce hover:font-bold">
        Củ sạc , cục sạc
      </p>
    </div>
  );
}

export default ItemGroupProduct;
