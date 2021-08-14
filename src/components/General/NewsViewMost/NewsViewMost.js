import React from "react";
import ItemNewsViewMost from "./ItemNewsViewMost/ItemNewsViewMost";

function NewsViewMost(props) {
  return (
    <>
      <div className="mb-8 ml-2">
        <span className="py-2 border-b-2 border-solid border-organce font-semibold text-xl text-gray-600">
          YÊU THÍCH
        </span>
      </div>
      <div className="w-full my-4 flex-wrap flex">
        <div className="w-full md:w-1/2 xl:w-full">
          <ItemNewsViewMost />
        </div>
        <div className="w-full md:w-1/2 xl:w-full">
          <ItemNewsViewMost />
        </div>
        <div className="w-full md:w-1/2 xl:w-full">
          <ItemNewsViewMost />
        </div>
        <div className="w-full md:w-1/2 xl:w-full">
          <ItemNewsViewMost />
        </div>
        <div className="w-full md:w-1/2 xl:w-full">
          <ItemNewsViewMost />
        </div>
      </div>
    </>
  );
}

export default NewsViewMost;
