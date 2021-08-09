import React from "react";
import Sale from "./Sale/Sale";
import ImageMain from "./Image/ImageMain/ImageMain";
import OptionAndView from "./OptionAndView/OptionAndView";
import CostAndLink from "./TypeProduct/CostAndLink/CostAndLink";

function ItemProduct(props) {
  //
  //
  return (
    <>
      <div className="w-46% m-2 bg-white relative product__main z-10">
        <Sale />
        <div className="w-full relative h-64 mx-auto product ">
          <ImageMain />
          <OptionAndView />
        </div>
        <CostAndLink />
      </div>
    </>
  );
}

export default ItemProduct;
