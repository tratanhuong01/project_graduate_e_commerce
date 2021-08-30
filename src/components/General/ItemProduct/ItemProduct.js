import React from "react";
import Sale from "./Sale/Sale";
import ImageMain from "./Image/ImageMain/ImageMain";
import OptionAndView from "./OptionAndView/OptionAndView";
import CostAndLink from "./TypeProduct/CostAndLink/CostAndLink";

function ItemProduct(props) {
  //
  const { product } = props;
  //
  return (
    <>
      <div className="w-46% m-2 relative product__search z-10">
        {product.sale > 0 && <Sale sale={product.sale} />}
        <div className="w-full relative h-64 mx-auto item__category ">
          <ImageMain image={product.image} />
          <OptionAndView product={product} />
        </div>
        <CostAndLink product={product} />
      </div>
    </>
  );
}

export default ItemProduct;
