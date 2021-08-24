import React from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import ItemChildNews from "../../components/News/ItemChildNews/ItemChildNews";
import InfoNews from "../../components/News/InfoNews/InfoNews";
import ItemCategoryNews from "../../components/News/ItemCategoryNews/ItemCategoryNews";
import NewsViewMost from "../../components/General/NewsViewMost/NewsViewMost";
import Pagination from "../../components/General/Pagination/Pagination";

function MainNews(props) {
  //
  const { news } = props;
  //
  return (
    <div className="w-full">
      <LevelUrl />
      <hr className="my-2"></hr>
      <div className="xl:w-4/5 w-full mx-auto p-4">
        <InfoNews news={news} />
      </div>
      <div className="xl:w-4/5 w-full flex flex-col lg:flex-row mx-auto px-4 justify-center">
        <div className="w-full lg:w-2/3">
          <div className="mb-8 ml-2">
            <span className="py-2 border-b-2 border-solid border-organce font-semibold text-xl text-gray-600 dark:text-white">
              NỔI BẬT
            </span>
          </div>
          <div className="w-full flex flex-wrap">
            {news.listAllNewsBestLimit.map((newData, index) => {
              return <ItemChildNews newData={newData} key={index} />;
            })}
          </div>
          <div className="w-full flex justify-center">
            <Pagination />
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <NewsViewMost />
        </div>
      </div>
      <div className="xl:w-4/5 w-full mx-auto p-4 flex flex-col lg:flex-row">
        {news.listNewsByCategory.map((listNew, index) => {
          return <ItemCategoryNews listNew={listNew} key={index} />;
        })}
      </div>
    </div>
  );
}

export default MainNews;
