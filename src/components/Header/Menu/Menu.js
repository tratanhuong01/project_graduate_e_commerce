import React from "react";
import CategoryIndexLeft from "../../Index/CategoryIndex/CategoryIndexLeft/CategoryIndexLeft";
import MenuCategory from "./MenuCategory/MenuCategory";

function Menu(props) {
  return (
    <div className="w-full bg-white">
      <div
        className="xl:w-4/5 px-3 w-full mx-auto flex text-gray-800 
      hidden lg:flex"
      >
        <div
          className="w-1/4 flex items-center justify-start"
          style={{ fontFamily: "sans-serif" }}
        >
          <div
            className="w-60 bg-organce cursor-pointer text-white font-bold 
            text-xm flex p-2.5 lg:relative data__hover"
          >
            DANH MỤC SẢN PHẨM
            <span className="bx bx-list-ul ml-3 text-2xl flex items-center"></span>
            <div className="w-60 absolute top-full left-0 z-second hover__show">
              <CategoryIndexLeft />
            </div>
          </div>
        </div>
        <div className="w-2/4 ml-6">
          <MenuCategory />
        </div>
        <div className="w-1/4 flex items-center justify-end">
          <button
            className="px-5 py-1 text-sm rounded-full border-2 border-solid border-organce 
            text-organce bg-white font-semibold flex"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
