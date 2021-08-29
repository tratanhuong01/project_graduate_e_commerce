import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemPagination from "./ItemPagination/ItemPagination";
import * as reviewProductsAction from "../../../actions/reviewProduct/index";
function Pagination(props) {
  //
  const dispatch = useDispatch();
  const { reviewAll, products, index, active } = useSelector(
    (state) => state.reviewProduct
  );
  let array = [];
  for (let index = 0; index < Math.ceil(reviewAll.sumReview / 5); index++)
    array.push(index);
  //
  return (
    <ul className="flex justify-end items-center dark:text-white">
      <li
        onClick={() => {
          if (index === 0) return;
          dispatch(
            reviewProductsAction.loadReviewProductByIndexPageRequest({
              index: index - 1,
              active,
              products,
            })
          );
        }}
        className={`w-10 h-10 rounded-full text-sm font-semibold border-2 m-0.5
        border-solid border-gray-500 flex justify-center items-center ${
          index === 0 ? "opacity-50 cursor-not-allowed" : " cursor-pointer "
        }`}
      >
        <i className="bx bxs-chevrons-left"></i>
      </li>
      {array.map((item, pos) => {
        return (
          <ItemPagination
            key={pos}
            item={item}
            index={pos}
            indexCurrent={index}
            products={products}
            active={active}
          />
        );
      })}
      <li
        onClick={() => {
          if (
            index === Math.ceil(reviewAll.sumReview / 5) - 1 ||
            reviewAll.sumReview === 0
          )
            return;
          dispatch(
            reviewProductsAction.loadReviewProductByIndexPageRequest({
              index: index + 1,
              active,
              products,
            })
          );
        }}
        className={`w-10 h-10 rounded-full text-sm font-semibold border-2 m-0.5
        border-solid border-gray-500 flex justify-center items-center ${
          index === Math.ceil(reviewAll.sumReview / 5) - 1 ||
          reviewAll.sumReview === 0
            ? "opacity-50 cursor-not-allowed"
            : " cursor-pointer "
        }`}
      >
        <i className="bx bxs-chevrons-right"></i>
      </li>
    </ul>
  );
}

export default Pagination;
