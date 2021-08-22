import React from "react";
import NewsLeft from "../../Index/News/NewsLeft/NewsLeft";
// import NewsRight from "../../Index/News/NewsRight/NewsRight";

function ItemCategoryNews(props) {
  return (
    <div className="w-full lg:w-1/3 mx-2 dark:text-gray-300">
      <div className="w-full h-10">
        <p
          className="py-2 text-xl font-semibold float-left border-b-2 border-solid 
          border-organce mb-5"
        >
          Tin khuyến mãi
        </p>
        <div className="flex float-right my-3">
          <button
            className="w-6 h-6 rounded-full border-2 border-solid items-center 
            border-gray-300 hover:bg-organce mx-0.5 flex justify-center hover:text-white"
          >
            <i className="bx bx-chevron-left"></i>
          </button>
          <button
            className="w-6 h-6 rounded-full border-2 border-solid items-center 
            border-gray-300 hover:bg-organce mx-0.5 flex justify-center hover:text-white"
          >
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>
      <NewsLeft />
      <br />
      {/* <NewsRight /> */}
    </div>
  );
}

export default ItemCategoryNews;
