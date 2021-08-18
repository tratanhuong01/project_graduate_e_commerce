import React from "react";
import NewsLeft from "../../../components/Index/News/NewsLeft/NewsLeft";
import NewsRight from "../../../components/Index/News/NewsRight/NewsRight";

function News(props) {
  //
  const { news } = props;
  let newsClone = [...news];
  newsClone.splice(0, 1);
  //
  return (
    news.length > 0 && (
      <div className="xl:w-4/5 w-full flex flex-col sm:flex-row mx-auto p-4">
        <NewsLeft newData={news[0]} subClass={"lg:w-7/12 mr-10"} />
        {newsClone.length > 0 && (
          <NewsRight news={newsClone} subClass={"lg:w-5/12"} />
        )}
      </div>
    )
  );
}

export default News;
