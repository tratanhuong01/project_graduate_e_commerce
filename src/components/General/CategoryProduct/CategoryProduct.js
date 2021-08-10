import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import ItemProductOther from "../ItemProduct/ItemProductOther";
import LabelCategoryProduct from "./LabelCategoryProduct/LabelCategoryProduct";

function CategoryProduct(props) {
  return (
    <div className="xl:w-4/5 w-full mx-auto p-4">
      <LabelCategoryProduct />
      <ScrollContainer className="w-full max-w-full flex overflow-hidden overflow-scroll scrollbar-css flex-shink">
        <ItemProductOther />
        <ItemProductOther />
        <ItemProductOther />
        <ItemProductOther />
        <ItemProductOther />
        <ItemProductOther />
        <ItemProductOther />
      </ScrollContainer>
    </div>
  );
}

export default CategoryProduct;
