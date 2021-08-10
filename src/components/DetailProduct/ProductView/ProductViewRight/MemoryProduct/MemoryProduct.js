import React from "react";
import ItemMemoryProduct from "./ItemMemoryProduct/ItemMemoryProduct";

function MemoryProduct(props) {
  //
  const { memories, memory } = props;
  //
  return (
    <div className="w-full my-3">
      <p className="font-bold text-xl font-semibold">KÍCH THƯỚC :</p>
      <div className="w-full flex">
        {memories.map((memoryData, index) => {
          return (
            <ItemMemoryProduct
              memory={memoryData}
              key={index}
              memoryCurrent={memory}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MemoryProduct;
