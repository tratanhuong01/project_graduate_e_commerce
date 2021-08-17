import React from "react";
import ItemHorizontalCategory from "./ItemHorizontalCategory/ItemHorizontalCategory";

function HorizontalCategory(props) {
  //
  const { products } = props;
  //
  return (
    <div className="xl:w-4/5 mx-auto w-full flex flex-wrap my-3 justify-center">
      {products.listCategoryByGroupProduct.map((item, index) => {
        return (
          <ItemHorizontalCategory
            item={item}
            key={index}
            categorys={products.listCategoryByGroupProduct}
          />
        );
      })}
    </div>
  );
}

export default HorizontalCategory;
