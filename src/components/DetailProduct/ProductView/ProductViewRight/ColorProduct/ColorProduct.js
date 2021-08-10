import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import ItemColorProduct from "./ItemColorProduct/ItemColorProduct";

function ColorProduct(props) {
  return (
    <div className="w-full my-3">
      <p className="font-bold text-xl font-semibold">MÀU SẮC :</p>
      <ScrollContainer className="w-full max-w-full flex overflow-hidden overflow-scroll scrollbar-css flex-shink">
        <ItemColorProduct />
        <ItemColorProduct />
        <ItemColorProduct />
        <ItemColorProduct />
        <ItemColorProduct />
        <ItemColorProduct />
        <ItemColorProduct />
        <ItemColorProduct />
        <ItemColorProduct />
      </ScrollContainer>
    </div>
  );
}

export default ColorProduct;
