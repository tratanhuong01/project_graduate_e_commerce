import React from "react";

function ItemSizeProduct(props) {
  return (
    <div
      className={
        "indexSizeActive" === "this.props.index"
          ? "w-10 h-10 p-1 m-1 flex justify-center border-2 border-solid text-organce " +
            "border-orangce bg-white rounded-full cursor-pointer"
          : "w-10 h-10 p-1 m-1 flex justify-center border-2 border-solid text-gray-700 " +
            "border-white  hover:border-organce bg-white rounded-full cursor-pointer"
      }
    >
      <span className=" text-xm flex items-center font-bold">43</span>
    </div>
  );
}

export default ItemSizeProduct;
