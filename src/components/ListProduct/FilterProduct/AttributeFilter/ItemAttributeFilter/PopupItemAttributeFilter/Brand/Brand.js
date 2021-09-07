import React, { useEffect, useState } from "react";
import ItemBrand from "./ItemBrand/ItemBrand";
import api from "../../../../../../../Utils/api";
import { useSelector } from "react-redux";
function Brand(props) {
  //
  const { setIndex } = props;
  const [brands, setBrands] = useState([]);
  const listProduct = useSelector((state) => state.listProduct);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api("brandsAll", "GET", null);
      if (unmounted) return;
      setBrands(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="w-full flex flex-wrap">
      {brands.map((brand, index) => {
        const state = listProduct.filters.findIndex((dt) => dt.id === brand.id);
        return (
          <ItemBrand
            brand={brand}
            key={index}
            state={state}
            setIndex={setIndex}
            listProduct={listProduct}
          />
        );
      })}
    </div>
  );
}

export default Brand;
