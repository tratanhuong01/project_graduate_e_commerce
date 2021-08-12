import React from "react";
import ItemCategoryIndexLeft from "./ItemCategoryIndexLeft/ItemCategoryIndexLeft";

function CategoryIndexLeft(props) {
  return (
    <div className="w-1/4">
      <ul className="w-full">
        <ItemCategoryIndexLeft icon={"bx bx-mobile-alt"} label={"Điện thoại"} />
        <ItemCategoryIndexLeft icon={"bx bx-mobile-alt"} label={"Điện thoại"} />
        <ItemCategoryIndexLeft icon={"bx bx-mobile-alt"} label={"Điện thoại"} />
        <ItemCategoryIndexLeft icon={"bx bx-mobile-alt"} label={"Điện thoại"} />
        <ItemCategoryIndexLeft icon={"bx bx-mobile-alt"} label={"Điện thoại"} />
        <ItemCategoryIndexLeft icon={"bx bx-mobile-alt"} label={"Điện thoại"} />
        <ItemCategoryIndexLeft icon={"bx bx-mobile-alt"} label={"Điện thoại"} />
        <ItemCategoryIndexLeft icon={"bx bx-mobile-alt"} label={"Điện thoại"} />

      </ul>
    </div>
  );
}

export default CategoryIndexLeft;
