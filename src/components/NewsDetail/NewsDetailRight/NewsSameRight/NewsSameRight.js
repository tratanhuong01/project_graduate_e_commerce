import React from "react";
import ItemNews from "../../../Index/News/NewsRight/ItemNews/ItemNews";

function NewsSameRight(props) {
  return (
    <>
      <div className="mb-8 ml-2">
        <span className="py-2 border-b-2 border-solid border-organce font-semibold text-xl text-gray-600">
          GẦN ĐÂY
        </span>
      </div>
      <div className="w-full my-4 flex flex-wrap">
        <div className="w-full md:w-1/2 xl:w-full">
          <ItemNews subClass="md:pr-10 xl:pr-0" />
        </div>
        <div className="w-full md:w-1/2 xl:w-full">
          <ItemNews subClass="md:pr-10 xl:pr-0" />
        </div>
        <div className="w-full md:w-1/2 xl:w-full">
          <ItemNews subClass="md:pr-10 xl:pr-0" />
        </div>
        <div className="w-full md:w-1/2 xl:w-full">
          <ItemNews subClass="md:pr-10 xl:pr-0" />
        </div>
        <div className="w-full md:w-1/2 xl:w-full">
          <ItemNews subClass="md:pr-10 xl:pr-0" />
        </div>
      </div>
    </>
  );
}

export default NewsSameRight;
