import React from "react";
import ItemHorizontalCategory from "./ItemHorizontalCategory/ItemHorizontalCategory";

function HorizontalCategory(props) {
  //
  const { categorys, className } = props;
  //
  return (
    <div className={className}>
      {categorys.map((item, index) => {
        return (
          <ItemHorizontalCategory
            item={item}
            key={index}
            categorys={categorys}
          />
        );
      })}
    </div>
  );
}

export default HorizontalCategory;
