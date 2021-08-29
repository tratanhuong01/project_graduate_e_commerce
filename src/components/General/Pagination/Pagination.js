import React, { useState } from "react";
import api from "../../../Utils/api";
import ItemPagination from "./ItemPagination/ItemPagination";

function Pagination(props) {
  //
  const [index, setIndex] = useState(0);
  const { reviewAll, products, setReviews } = props;
  let array = [];
  for (let index = 0; index < Math.ceil(reviewAll.sumReview / 5); index++)
    array.push(index);

  //
  return (
    <ul className="flex justify-end items-center dark:text-white">
      <li
        onClick={() => {
          if (index === 0) return;
          setIndex(index - 1);
          let unmounted = false;
          async function fetch() {
            const result = await api(
              `reviewProducts/${products.idProduct}/${(index - 1) * 5}/5`
            );
            if (unmounted) return;
            setReviews(result.data);
            window.scrollTo(
              0,
              document
                .getElementById("detailRateComment")
                .getBoundingClientRect().top +
                window.scrollY -
                100
            );
          }
          fetch();
          return () => {
            unmounted = true;
          };
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
            setIndex={setIndex}
            indexCurrent={index}
            products={products}
            setReviews={setReviews}
          />
        );
      })}
      <li
        onClick={() => {
          if (index === Math.ceil(reviewAll.sumReview / 5) - 1) return;
          setIndex(index + 1);
          let unmounted = false;
          async function fetch() {
            const result = await api(
              `reviewProducts/${products.idProduct}/${(index + 1) * 5}/5`
            );
            if (unmounted) return;
            setReviews(result.data);
            window.scrollTo(
              0,
              document
                .getElementById("detailRateComment")
                .getBoundingClientRect().top +
                window.scrollY -
                100
            );
          }
          fetch();
          return () => {
            unmounted = true;
          };
        }}
        className={`w-10 h-10 rounded-full text-sm font-semibold border-2 m-0.5
        border-solid border-gray-500 flex justify-center items-center ${
          index === Math.ceil(reviewAll.sumReview / 5) - 1
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
