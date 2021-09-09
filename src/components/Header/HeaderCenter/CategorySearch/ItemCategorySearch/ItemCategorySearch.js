import React from "react";

function ItemCategorySearch(props) {
  //
  const { category, setData } = props;
  //
  return (
    <div
      onClick={() =>
        setData({
          name: category.categoryProduct.nameCategoryProduct,
          id: category.categoryProduct.id,
        })
      }
      className="w-full text-sm p-2 border-solid border-gray-200 border-b-2 flex font-semibold justify-center items-center cursor-pointer hover:bg-gray-100 dark:border-dark-second 
   dark:hover:bg-dark-second "
    >
      {category.categoryProduct.nameCategoryProduct}
    </div>
  );
}

export default ItemCategorySearch;
