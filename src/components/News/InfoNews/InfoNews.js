import React from "react";
import NewsLeft from "../../Index/News/NewsLeft/NewsLeft";

function InfoNews(props) {
  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="w-full lg:w-3/5 p-1 pt-2 pb-3 flex">
          <NewsLeft />
        </div>
        <div className="w-full lg:w-2/5 px-2 my-2 md:flex lg:flex-col xl:pt-0.5">
          <div className="w-full md:w-1/2 lg:w-full mr-2 lg:mr-0">
            <NewsLeft />
          </div>
          <div className="w-full md:w-1/2 lg:w-full ">
            <NewsLeft />
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoNews;
