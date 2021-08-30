import React from "react";
import CommentPost from "./CommentPost/CommentPost";
import ContentNewsDetail from "./ContentNewsDetail/ContentNewsDetail";

function NewsDetailLeft(props) {
  //
  const { newsDetail } = props;
  //
  return (
    <div className="w-full lg:w-2/3">
      <ContentNewsDetail newsDetail={newsDetail.news} />
      <CommentPost newsDetail={newsDetail} />
    </div>
  );
}

export default NewsDetailLeft;
