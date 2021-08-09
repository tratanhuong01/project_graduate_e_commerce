import React from "react";
import Sale from "./Sale/Sale";
import { Link } from "react-router-dom";
import ImageMain from "./Image/ImageMain/ImageMain";
import OptionAndView from "./OptionAndView/OptionAndView";
import ArrowUp from "./TypeProduct/ArrowDown/ArrowDown";
import ArrowDown from "./TypeProduct/ArrowDown/ArrowDown";
import ItemTypeProduct from "./TypeProduct/ItemTypeProduct/ItemTypeProduct";
import * as Config from "../../../constants/Config";
import CostAndLink from "./TypeProduct/CostAndLink/CostAndLink";

function ItemProductOther(props) {
  //
  //
  return (
    <>
      <div
        className={"w-46% m-2 bg-white relative product__search flex-shrink-0"}
      >
        <Sale />
        <div className="w-full relative h-64 mx-auto product z-10">
          <ImageMain />
          <OptionAndView />
        </div>
        <CostAndLink />
      </div>
    </>
  );
}

export default ItemProductOther;
