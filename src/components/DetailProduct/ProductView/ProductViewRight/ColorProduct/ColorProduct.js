import React, { useEffect, useState } from "react";
import api from "../../../../../Utils/api";
// import ScrollContainer from "react-indiana-drag-scroll";
import ItemColorProduct from "./ItemColorProduct/ItemColorProduct";

function ColorProduct(props) {
  //
  const { colorData, imageData, products } = props;
  const [colors, setColors] = useState([]);
  useEffect(() => {
    //
    let unmounted = false;
    const fetch = async () => {
      const result = await api(`getImageByIdLineProduct?idLineProduct=${products.idLineProduct}`, 'GET', null, {});
      if (unmounted) return;
      setColors(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    }
    //
  }, [products.idLineProduct]);
  //
  return (
    colors.length > 0 &&
    <div className="w-full my-3 dark:text-gray-300">
      <p className="font-bold text-xl">MÀU SẮC :</p>
      <div className="w-full max-w-full flex scrollbar-css flex-shink">
        {colors.map((color, index) => {
          return (
            <ItemColorProduct
              color={color.colorProduct}
              key={index}
              colorData={colorData}
              image={colors[index]}
              imageData={imageData}
              products={products}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ColorProduct;
