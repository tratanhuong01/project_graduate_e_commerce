import React from "react";
import ProductViewLeft from "../../components/DetailProduct/ProductView/ProductViewLeft/ProductViewLeft";
import ProductViewRight from "../../components/DetailProduct/ProductView/ProductViewRight/ProductViewRight";

function ProductView(props) {
  //
  //
  return (
    <div className="w-full flex flex-col xl:flex-row">
      <ProductViewLeft />
      <ProductViewRight />
    </div>
  );
}

export default ProductView;
