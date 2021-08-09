import React from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../../../constants/Config";

function CostAndLink(props) {
  return (
    <>
      <p
        className="p-2 hover:text-organce text-center cursor-pointer 
                text-xm h-12 flex justify-center"
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
        {new Intl.NumberFormat().format(12345678)}
        <u>đ</u>&nbsp;
        <strike className="ml-3 text-gray-500">
          {new Intl.NumberFormat().format(12345678)} <u>đ</u>
        </strike>
      </p>
    </>
  );
}

export default CostAndLink;
