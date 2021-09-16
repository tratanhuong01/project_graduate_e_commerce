import React from "react";
import { Link } from "react-router-dom";
import { PAGE_SEARCH } from "../../../../constants/Config";
import ItemSearchPopup from "./ItemSearchPopup/ItemSearchPopup";

function SearchPopup(props) {
  //
  const { loading, products, keyword, data } = props;
  //
  return (
    <div
      className="absolute border-2 border-solid border-gray-200 shadow-xl top-full mt-1 left-0 bg-white dark:bg-dark-second rounded-b-lg w-full "
      id="search__popup"
    >
      {loading && (
        <div className="w-full p-3 flex items-center justify-center">
          <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
        </div>
      )}
      {products.map((product, index) => {
        return <ItemSearchPopup product={product} key={index} />;
      })}
      {!loading && (
        <div className="w-full p-3 flex items-center justify-center text-organce font-semibold">
          <Link to={`${PAGE_SEARCH}?query=${keyword}&slug=${data.slug}`}>
            Xem tất cả
          </Link>
        </div>
      )}
    </div>
  );
}

export default SearchPopup;
