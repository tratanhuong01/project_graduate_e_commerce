import React from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../../../constants/Config";

function CostAndLink(props) {
  //
  const { product } = props;
  //
  return (
    <>
      <p
        className="p-2 hover:text-organce text-center cursor-pointer 
                text-xm h-12 flex justify-center"
      >
        <span className="flex items-center font-semibold dark:text-white hover:text-organce">
          {typeof product !== "undefined" && (
            <Link to={`${Config.PAGE_DETAIL_PRODUCT}/${product.slug}`}>
              {" "}
              {product.nameLineProduct.length > 40
                ? product.nameLineProduct.substring(0, 40) + "..."
                : product.nameLineProduct}
            </Link>
          )}
        </span>
      </p>
      <p
        className="p-2 pt-0 text-organce text-center cursor-pointer 
        text-xm font-semibold"
      >
        {new Intl.NumberFormat().format(
          typeof product !== "undefined" &&
            product.priceOutput * ((100 - product.sale) / 100)
        )}
        <u>đ</u>&nbsp;
        {typeof product !== "undefined" && product.sale > 0 && (
          <strike className="ml-3 text-gray-500 dark:text-gray-300">
            {new Intl.NumberFormat().format(product.priceOutput)} <u>đ</u>
          </strike>
        )}
      </p>
    </>
  );
}

export default CostAndLink;
