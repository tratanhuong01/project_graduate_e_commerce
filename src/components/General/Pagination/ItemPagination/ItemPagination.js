import React from "react";
import { useDispatch } from "react-redux";
import * as reviewProductsAction from "../../../../actions/reviewProduct/index";

function ItemPagination(props) {
  //
  const dispatch = useDispatch();
  const { index, indexCurrent, products, active } = props;
  //
  return (
    <li
      onClick={() => {
        dispatch(
          reviewProductsAction.loadReviewProductByIndexPageRequest({
            index: index,
            active,
            products,
          })
        );
      }}
      className={`w-10 h-10 rounded-full text-sm font-semibold border-2 m-0.5 cursor-pointer 
        border-solid ${
          index === indexCurrent
            ? "border-organce text-organce"
            : "border-gray-500"
        } flex justify-center items-center`}
    >
      {index}
    </li>
  );
}

export default ItemPagination;
