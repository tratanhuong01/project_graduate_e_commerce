import React from "react";
import ProductViewLeft from "../../components/DetailProduct/ProductView/ProductViewLeft/ProductViewLeft";
import ProductViewRight from "../../components/DetailProduct/ProductView/ProductViewRight/ProductViewRight";

function ProductView(props) {
  //
  const { products } = props;
  //
  return (
    <div className="w-full flex flex-col xl:flex-row border-b-2 border-solid border-gray-200">
      <ProductViewLeft products={products} />
      <ProductViewRight products={products} />
    </div>
  );
}

export default ProductView;
