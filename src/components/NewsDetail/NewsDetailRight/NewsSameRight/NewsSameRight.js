import React from "react";
import ItemNews from "../../../Index/News/NewsRight/ItemNews/ItemNews";

function NewsSameRight(props) {
  //
  const { news } = props;
  //
  return news ? (
    <>
      <div className="mb-8 ml-2">
        <span
          className="py-2 border-b-2 border-solid border-organce font-semibold text-xl 
        text-gray-600 dark:text-white"
        >
          BÀI VIẾT TƯƠNG TỰ
        </span>
      </div>
      <div className="w-full my-4 flex flex-wrap">
        {news.map((newData, index) => {
          return (
            <div className="w-full md:w-1/2 xl:w-full" key={index}>
              <ItemNews subClass="md:pr-10 xl:pr-0" newData={newData} />
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <div className="w-full flex justify-center items-center p-5">
      <span
        className="fas fa-spinner fa-spin text-gray-600 
        text-2xl flex items-center"
      ></span>
    </div>
  );
}

export default NewsSameRight;
