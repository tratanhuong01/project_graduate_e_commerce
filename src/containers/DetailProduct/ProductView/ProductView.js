import React, { useEffect, useState } from "react";
import ProductViewLeft from "../../../components/DetailProduct/ProductView/ProductViewLeft/ProductViewLeft";
import ProductViewRight from "../../../components/DetailProduct/ProductView/ProductViewRight/ProductViewRight";

function ProductView(props) {
  //
  const { products } = props;
  const [imageData, setImageData] = useState(products.image);
  useEffect(() => {
    setImageData(products.image);
  }, [products]);
  //
  return (
    <div className="w-full flex flex-col xl:flex-row border-b-2 border-solid border-gray-200">
      <ProductViewLeft
        products={products}
        imageData={imageData}
        setImageData={setImageData}
      />
      <ProductViewRight
        products={products}
        imageData={imageData}
        setImageData={setImageData}
      />
    </div>
  );
}

export default ProductView;
