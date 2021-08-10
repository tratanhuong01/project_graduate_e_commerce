import React from "react";

function LabelCategoryProduct(props) {
  //
  const { products } = props;
  //
  return (
    <div className="w-full border-b-4 border-solid border-organce">
      <div className="px-4 py-2 bg-organce w-60 font-semibold text-white">
        {products.nameCategoryProduct}
      </div>
    </div>
  );
}

export default LabelCategoryProduct;
