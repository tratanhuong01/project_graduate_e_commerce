import React, { useEffect, useState } from "react";
import ItemBrand from "./ItemBrand/ItemBrand";
import api from "../../../../../../../Utils/api";
import { useSelector } from "react-redux";
function Brand(props) {
  //

  const { setIndex } = props;
  const [brands, setBrands] = useState([]);
  const { headers, listProduct } = useSelector((state) => {
    return {
      listProduct: state.listProduct,
      headers: state.headers,
    };
  });
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      try {
        const result = await api(
          listProduct.slug
            ? `brands/slugGroupProduct/${listProduct.slug}`
            : `brandsAll`,
          "GET",
          null,
          headers
        );
        if (unmounted) return;
        setBrands(result.data);
      } catch (error) {
        throw error;
      }
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listProduct.slug]);
  //
  return (
    <div className="w-full flex flex-wrap dark:bg-dark-second">
      {brands.length > 0 ? (
        brands.map((brand, index) => {
          const state = listProduct.filters.findIndex(
            (dt) => dt.id === brand.id && dt.name === brand.name
          );
          return (
            <ItemBrand
              brand={brand}
              key={index}
              state={state}
              setIndex={setIndex}
              listProduct={listProduct}
            />
          );
        })
      ) : (
        <div className="p-2.5 font-semibold text-gray-600">Đang cập nhật</div>
      )}
    </div>
  );
}

export default Brand;
