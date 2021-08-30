import React from "react";
import AttributeFilter from "./AttributeFilter/AttributeFilter";
import FooterFilterProduct from "./FooterFilterProduct/FooterFilterProduct";

function FilterProduct(props) {
  return (
    <div className="w-full mx-auto">
      <AttributeFilter />
      <FooterFilterProduct />
    </div>
  );
}

export default FilterProduct;
