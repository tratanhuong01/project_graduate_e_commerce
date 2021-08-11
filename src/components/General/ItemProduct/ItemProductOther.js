import React from "react";
import Sale from "./Sale/Sale";
import ImageMain from "./Image/ImageMain/ImageMain";
import OptionAndView from "./OptionAndView/OptionAndView";
import CostAndLink from "./TypeProduct/CostAndLink/CostAndLink";

function ItemProductOther(props) {
  //
  const { product } = props;
  //
  return (
    <>
      <div
        className={
          "w-46% m-2 bg-white relative product__search flex-shrink-0 z-40"
        }
      >
        {product.sale > 0 && <Sale sale={product.sale} />}
        <div className="w-full relative h-64 mx-auto product z-10">
          <ImageMain image={product.image} />
          <OptionAndView />
        </div>
        <CostAndLink product={product} />
      </div>
    </>
  );
}

export default ItemProductOther;
