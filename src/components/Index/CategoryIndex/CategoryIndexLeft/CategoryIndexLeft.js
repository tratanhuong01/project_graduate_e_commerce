import React from "react";
import ItemCategoryIndexLeft from "./ItemCategoryIndexLeft/ItemCategoryIndexLeft";

function CategoryIndexLeft(props) {
  //
  const { categorys } = props;
  //
  return (
    categorys.length > 0 && (
      <ul className="w-full relative shadow-lg bg-white text-gray-800">
        {categorys.map((item, index) => {
          return (
            <ItemCategoryIndexLeft
              groups={item}
              key={index}
              icon={item.categoryProduct.icon}
              label={item.categoryProduct.nameCategoryProduct}
            />
          );
        })}
      </ul>
    )
  );
}

export default CategoryIndexLeft;
