import React from "react";
import CommentPost from "./CommentPost/CommentPost";
import ContentNewsDetail from "./ContentNewsDetail/ContentNewsDetail";
import FormCommentNews from "./FormCommentNews/FormCommentNews";

function NewsDetailLeft(props) {
  //
  const { newsDetail } = props;
  //
  return (
    <div className="w-full lg:w-2/3">
      <ContentNewsDetail newsDetail={newsDetail} />
      <CommentPost />
      <FormCommentNews />
    </div>
  );
}

export default NewsDetailLeft;
