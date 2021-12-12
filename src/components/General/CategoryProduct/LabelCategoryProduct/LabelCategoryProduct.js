import React from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../../constants/Config";

function LabelCategoryProduct(props) {
  //
  const { products, title } = props;
  //
  return (
    <div className="w-full border-b-4 border-solid border-organce relative">
      <div className="px-4 py-2 bg-organce w-60 font-semibold text-white">
        {title ? title : products.nameCategoryProduct}
      </div>
      {!title && <Link
        to={`${Config.PAGE_PRODUCT}/${products.slugCategoryProduct}`}
        className="absolute top-2 right-4 text-organce 
      font-semibold"
      >
        Xem tất cả
      </Link>}
    </div>
  );
}

export default LabelCategoryProduct;
