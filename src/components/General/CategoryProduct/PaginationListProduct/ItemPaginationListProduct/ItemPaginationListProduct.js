import React from "react";

function ItemPaginationListProduct(props) {
  //
  const { setActive, active, index, idCategoryProduct } = props;
  //
  return (
    <li
      onClick={() => {
        setActive(index);
        if (document.querySelector(`.${idCategoryProduct}`))
          document.querySelector(`.${idCategoryProduct}`).scrollLeft =
            index * 4 * 290;
      }}
      className={`${
        active === index
          ? "bg-organce border-yellow-500 "
          : "bg-white border-2 border-organce"
      } border-solid w-5 h-5 rounded-full 
      m-1 cursor-pointer`}
    ></li>
  );
}

export default ItemPaginationListProduct;
