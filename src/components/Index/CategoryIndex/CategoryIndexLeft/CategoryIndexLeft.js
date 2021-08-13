import React from "react";
import CategoryIndexLeftTop from "./CategoryIndexLeftTop/CategoryIndexLeftTop";
import ItemCategoryIndexLeft from "./ItemCategoryIndexLeft/ItemCategoryIndexLeft";

function CategoryIndexLeft(props) {
  //
  const { products, menu, setMenu } = props;
  //
  return (
    <div
      className={`${
        menu ? "" : "hidden"
      } w-2/3 fixed top-0 left-0 md:relative md:w-56 lg:w-1/4 bg-white md:bg-transparent z-50 
      h-screen md:h-auto max-h-full overflow-y-auto md:overflow-visible scrollbar-css category__index__left`}
    >
      <ul className="w-full relative">
        <div className="w-full p-2 md:hidden">
          <CategoryIndexLeftTop
            setMenu={(state) => setMenu(state)}
            menu={menu}
          />
        </div>
        {products.listCategoryByGroupProduct.map((item, index) => {
          return (
            <ItemCategoryIndexLeft
              groups={item}
              key={index}
              icon={item.categoryProduct.icon}
              label={item.categoryProduct.nameCategoryProduct}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default CategoryIndexLeft;
