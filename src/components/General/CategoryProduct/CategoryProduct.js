import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import ItemProductOther from "../ItemProduct/ItemProductOther";
import LabelCategoryProduct from "./LabelCategoryProduct/LabelCategoryProduct";

function CategoryProduct(props) {
  //
  const { products } = props;
  //
  return (
    <div className="xl:w-4/5 w-full mx-auto p-4">
      <LabelCategoryProduct products={products} />
      <ScrollContainer className="w-full max-w-full flex overflow-hidden overflow-scroll scrollbar-css flex-shink">
        {products.listProductCategory.map((product, index) => {
          return <ItemProductOther product={product} key={index} />;
        })}
      </ScrollContainer>
    </div>
  );
}

export default CategoryProduct;
