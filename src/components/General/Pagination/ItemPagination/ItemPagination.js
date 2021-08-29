import React from "react";
import api from "../../../../Utils/api";

function ItemPagination(props) {
  //
  const { index, indexCurrent, setIndex, products, setReviews } = props;
  //
  return (
    <li
      onClick={() => {
        setIndex(index);
        let unmounted = false;
        async function fetch() {
          const result = await api(
            `reviewProducts/${products.idProduct}/${index * 5}/5`
          );
          if (unmounted) return;
          setReviews(result.data);
          window.scrollTo(
            0,
            document.getElementById("detailRateComment").getBoundingClientRect()
              .top +
              window.scrollY -
              100
          );
        }
        fetch();
        return () => {
          unmounted = true;
        };
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
