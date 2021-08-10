import React from "react";

function ItemMemoryProduct(props) {
  //
  const { memory, memoryCurrent } = props;
  //
  return (
    <div
      className={` px-4 py-2.5 rounded-full m-1 flex justify-center border-2 border-solid bg-white rounded-full cursor-pointer${
        memory.nameMemory === memoryCurrent
          ? " text-organce border-orangce "
          : "border-gray-300"
      }`}
    >
      <span className=" text-xm flex items-center font-bold">
        {memory.nameMemory}
      </span>
    </div>
  );
}

export default ItemMemoryProduct;
