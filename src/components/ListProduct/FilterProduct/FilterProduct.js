import React from "react";
import AttributeFilter from "./AttributeFilter/AttributeFilter";
import FooterFilterProduct from "./FooterFilterProduct/FooterFilterProduct";

function FilterProduct(props) {
  //
  const { slug } = props;
  //
  return (
    <div className="w-full mx-auto">
      <AttributeFilter slug={slug} />
      <FooterFilterProduct />
    </div>
  );
}

export default FilterProduct;
