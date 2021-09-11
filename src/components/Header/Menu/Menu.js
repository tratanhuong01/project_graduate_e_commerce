import React from "react";
import CategoryIndexLeft from "../../Index/CategoryIndex/CategoryIndexLeft/CategoryIndexLeft";
import MenuCategory from "./MenuCategory/MenuCategory";

function Menu(props) {
  //
  const { categorys } = props;
  //
  return (
    <div className="w-full">
      <div
        className="xl:w-4/5 px-3 w-full mx-auto text-gray-800 
      hidden lg:flex"
      >
        <div className="w-1/4 flex items-center justify-start">
          <div
            className="w-60 bg-organce cursor-pointer text-white font-bold 
            text-xm flex p-2.5 lg:relative data__hover"
          >
            DANH MỤC SẢN PHẨM
            <span className="fas fa-bars ml-3 text-xm flex items-center"></span>
            <div className="w-60 absolute top-full left-0 z-second hover__show">
              <CategoryIndexLeft categorys={categorys} />
            </div>
          </div>
        </div>
        <div className="w-2/4 ml-6  dark:text-gray-300">
          <MenuCategory />
        </div>
        <div className="w-1/4 flex items-center justify-end">
          <button
            className="px-5 py-1 text-sm rounded-full border-2 border-solid border-organce 
            text-organce dark:text-white font-semibold flex"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
