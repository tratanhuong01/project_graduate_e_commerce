import React from "react";
import NewsViewMost from "../../General/NewsViewMost/NewsViewMost";
import FollowUs from "./FollowUs/FollowUs";
import NewsSameRight from "./NewsSameRight/NewsSameRight";

function NewsDetailRight(props) {
  //
  const { newsDetail } = props;
  //
  return (
    <div className="w-full lg:w-1/3 lg:ml-5 mt-5 lg:mt-0">
      <FollowUs />
      <NewsSameRight news={newsDetail.newsSameList} />
      <NewsViewMost />
    </div>
  );
}

export default NewsDetailRight;
