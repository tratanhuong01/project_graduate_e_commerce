import React from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../constants/Config";
function ItemChildNews(props) {
  //
  const { newData } = props;
  //
  return (
    <div
      className="xl:w-60 w-full item__child__news__item px-2 xl:mr-3 my-2 bg-white box-content relative 
    dark:bg-dark-second dark:text-gray-300"
    >
      <div className="w-full mx-auto my-3 mb-5 ">
        <div className="w-full news__left relative cursor-pointer">
          <img
            src={newData.thumbnail}
            className="w-full h-60 lg:h-36 object-cover"
            alt=""
          />
        </div>
        <div className="w-full relative">
          <Link
            to={`${Config.PAGE_NEWS}/${newData.slug}`}
            className="text-xm font-semibold cursor-pointer hover:text-organce"
          >
            {newData.title.substring(0, 50) + "..."}
          </Link>
          <p className="text-gray-500 w-full flex mt-2">
            <button className="bg-organce mr-3 px-1.5 py-1 rounded-full text-xs text-gray-100 font-semibold">
              {newData.categoryNews.nameCategoryNews}
            </button>
            <span className="flex items-center text-sm font-semibold float-right">
              {newData.timeCreated.split(" ")[0]}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemChildNews;
