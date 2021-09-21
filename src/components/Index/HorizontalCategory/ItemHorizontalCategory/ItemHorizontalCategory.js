import React from "react";
import { useHistory } from "react-router";
import { PAGE_PRODUCT } from "../../../../constants/Config";

function ItemHorizontalCategory(props) {
  //
  const { item, link } = props;
  const history = useHistory();
  //
  return (
    <div
      onClick={() => {
        if (link) {
          history.push(
            `${PAGE_PRODUCT}/${item.categoryProduct.slugCategoryProduct}`
          );
        } else {
          if (document.getElementById(`${item.categoryProduct.id}`))
            window.scrollTo(
              0,
              document
                .getElementById(`${item.categoryProduct.id}`)
                .getBoundingClientRect().top +
                window.scrollY -
                100
            );
        }
      }}
      className={`w-28 lg:w-36 h-24 hover:text-organce font-semibold flex flex-wrap 
      justify-center items-center dark:text-white cursor-pointer item__horizontal__category`}
    >
      <div
        className={`w-16 h-16 rounded-full border-2 border-solid border-gray-200 flex justify-center items-center dark:border-dark-third item__horizontal__category--circle`}
      >
        <span className={`${item.categoryProduct.icon} text-4xl`}></span>
      </div>
      <p className="text-center w-full h-7 inline-block whitespace-nowrap overflow-ellipsis overflow-hidden max-w-full">
        {item.categoryProduct.nameCategoryProduct}
      </p>
    </div>
  );
}

export default ItemHorizontalCategory;
