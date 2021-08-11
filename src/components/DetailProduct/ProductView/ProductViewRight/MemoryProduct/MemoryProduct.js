import React from "react";
import ItemMemoryProduct from "./ItemMemoryProduct/ItemMemoryProduct";

function MemoryProduct(props) {
  //
  const { memories, memory, products } = props;
  //
  return (
    <div className="w-full my-3">
      <p className="font-bold text-xl font-semibold">KÍCH THƯỚC :</p>
      <div className="w-full flex">
        {memories.map((memoryData, index) => {
          return (
            <ItemMemoryProduct
              memoryData={memoryData}
              key={index}
              memoryCurrent={memory}
              products={products}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MemoryProduct;
