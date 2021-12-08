import React, { useEffect, useState } from "react";
import api from "../../../../../Utils/api";
import ItemMemoryProduct from "./ItemMemoryProduct/ItemMemoryProduct";

function MemoryProduct(props) {
  //
  const { memory, products } = props;
  const [memoryList, setMemoryList] = useState([]);
  useEffect(() => {
    //
    let unmounted = false;
    const fetch = async () => {
      const result = await api(`getMemoryByIdLineProduct?idLineProduct=${products.idLineProduct}`, 'GET', null, {});
      if (unmounted) return;
      setMemoryList(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    }
    //
  }, [products.idLineProduct]);
  //
  return (
    memoryList.length > 0 &&
    <div className="w-full my-3 dark:text-gray-300">
      <p className="font-bold text-xl mb-1">BỘ NHỚ :</p>
      <div className="w-full flex">
        {memoryList.map((memoryData, index) => {
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
