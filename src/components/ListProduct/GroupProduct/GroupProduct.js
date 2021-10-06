import React, { useEffect, useState } from "react";
import ItemGroupProduct from "./ItemGroupProduct/ItemGroupProduct";
import * as productApi from "../../../api/productApi";
import { useSelector } from "react-redux";

function GroupProduct(props) {
  //
  const { headers, listProduct } = useSelector((state) => {
    return {
      listProduct: state.listProduct,
      headers: state.headers,
    };
  });
  const [groupProducts, setGroupProduct] = useState(null);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await productApi.groupProductsBySlugCategory(
        listProduct.slug,
        headers
      );
      if (unmounted) return;
      setGroupProduct(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listProduct.slug]);
  //
  return (
    <div className="w-full mb-3 mx-auto flex ">
      {groupProducts ? (
        groupProducts.map((groupProduct, index) => {
          return <ItemGroupProduct groupProduct={groupProduct} key={index} />;
        })
      ) : (
        <div className="w-full h-16 flex items-center justify-center">
          <div className="dot-windmill"></div>
        </div>
      )}
    </div>
  );
}

export default GroupProduct;
