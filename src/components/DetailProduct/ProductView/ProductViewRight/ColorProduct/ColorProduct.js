import React from "react";
// import ScrollContainer from "react-indiana-drag-scroll";
import ItemColorProduct from "./ItemColorProduct/ItemColorProduct";

function ColorProduct(props) {
  //
  const { colors, colorData, images, imageData, products } = props;
  //
  return (
    <div className="w-full my-3">
      <p className="font-bold text-xl">MÀU SẮC :</p>
      <div className="w-full max-w-full flex scrollbar-css flex-shink">
        {colors.map((color, index) => {
          return (
            <ItemColorProduct
              color={color}
              key={index}
              colorData={colorData}
              image={images[index]}
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
