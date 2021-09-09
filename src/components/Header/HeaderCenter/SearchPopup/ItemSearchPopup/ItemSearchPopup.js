import React from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../../../constants/Config";

function ItemSearchPopup(props) {
  //
  const { product } = props;
  //
  return (
    <div className="w-full p-2 border-b-2 border-solid border-gray-100 shadow-sm flex items-center">
      <img
        src={product.image.src}
        alt=""
        className="w-20 h-24 py-1 object-cover"
      />
      <div className="flex justify-items-center flex-col pl-3">
        <p className="mb-1 font-bold text-xm">
          <Link to={`${Config.PAGE_DETAIL_PRODUCT}/${product.slug}`}>
            {product.nameLineProduct}
          </Link>
        </p>
        <p className="text-organce text-sm font-semibold">
          {new Intl.NumberFormat().format(
            product.priceOutput * ((100 - product.sale) / 100)
          )}
        </p>
      </div>
    </div>
  );
}

export default ItemSearchPopup;
