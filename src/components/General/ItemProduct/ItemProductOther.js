import React from "react";
import Sale from "./Sale/Sale";
import { Link } from "react-router-dom";
import ImageMain from "./Image/ImageMain/ImageMain";
import OptionAndView from "./OptionAndView/OptionAndView";
import ArrowUp from "./TypeProduct/ArrowDown/ArrowDown";
import ArrowDown from "./TypeProduct/ArrowDown/ArrowDown";
import ItemTypeProduct from "./TypeProduct/ItemTypeProduct/ItemTypeProduct";
import * as Config from "../../../constants/Config";

function ItemProductOther(props) {
  //
  //
  return (
    <>
      <div className={"w-1/2 md:w-1/3 lg:w-1/4 m-2 bg-white relative"}>
        <Sale />
        <div className="w-full relative h-64 mx-auto product  z-10">
          <ImageMain />
          <OptionAndView />
        </div>
        <div className="w-full mx-auto p-1 flex">
          <ArrowUp />
          <ul className="w-11/12 flex justify-center">
            <ItemTypeProduct />
          </ul>
          <ArrowDown />
        </div>
        <p
          className="p-2 hover:text-organce text-center cursor-pointer 
                  text-xm h-16 flex justify-center"
        >
          <span className="flex items-center font-semibold">
            <Link to={`${Config.PAGE_DETAIL_PRODUCT}/`}>
              {"product.NameProduct"}
            </Link>
          </span>
        </p>
        <p
          className="p-2 pt-0 text-organce text-center cursor-pointer 
                  text-xm"
        >
          {new Intl.NumberFormat().format(1234567)}
          <u>đ</u>&nbsp;
          <strike className="ml-3 text-gray-500">
            {new Intl.NumberFormat().format(1234567)} <u>đ</u>
          </strike>
        </p>
      </div>
    </>
  );
}

export default ItemProductOther;
