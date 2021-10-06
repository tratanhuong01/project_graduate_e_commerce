import React, { useEffect, useState } from "react";
import ItemColor from "./ItemColor/ItemColor";
import api from "../../../../../../../Utils/api";
import { useSelector } from "react-redux";
function Color(props) {
  //

  const { setIndex } = props;
  const [colors, setColors] = useState([]);
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
      const result = await api(
        listProduct.slug ? `colorsAll` : `colorsAll`,
        "GET",
        null,
        headers
      );
      if (unmounted) return;
      setColors(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listProduct.slug]);
  //
  return (
    <div className="w-full flex flex-wrap">
      {colors.length > 0 ? (
        colors.map((color, index) => {
          const state = listProduct.filters.findIndex(
            (dt) => dt.id === color.id
          );
          return (
            <ItemColor
              color={color}
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

export default Color;
