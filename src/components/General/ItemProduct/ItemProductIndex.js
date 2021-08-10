import React from "react";
import Sale from "./Sale/Sale";
import ImageMain from "./Image/ImageMain/ImageMain";
import OptionAndView from "./OptionAndView/OptionAndView";
import CostAndLink from "./TypeProduct/CostAndLink/CostAndLink";

function ItemProductIndex(props) {
  //
  //
  return (
    <>
      <div className="w-1/2 p-2 relative z-40">
        {<Sale />}
        <div className="w-full relative h-64 mx-auto product ">
          <ImageMain />
          <OptionAndView />
          <span
            className="bx bxs-gift text-4xl text-organce cursor-pointer 
          absolute z-50 bottom-1 right-0"
          ></span>
          <span
            className="px-2 py-1.5 rounded-full text-xs bg-organce text-white 
          font-semibold absolute bottom-1 left-2 cursor-pointer"
          >
            <i className="fas fa-fire text-yellow-300 mr-2"></i>Giảm 6.500.000đ
          </span>
        </div>
        <CostAndLink />
      </div>
    </>
  );
}

export default ItemProductIndex;
