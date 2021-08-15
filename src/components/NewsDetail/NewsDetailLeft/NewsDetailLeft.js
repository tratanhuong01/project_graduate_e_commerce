import React from "react";
import { useSelector } from "react-redux";
import CommentPost from "./CommentPost/CommentPost";
import ContentNewsDetail from "./ContentNewsDetail/ContentNewsDetail";
import FormCommentNews from "./FormCommentNews/FormCommentNews";

function NewsDetailLeft(props) {
  //
  const { newsDetail } = props;
  const states = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const { user } = states;
  //
  return (
    <div className="w-full lg:w-2/3">
      <ContentNewsDetail newsDetail={newsDetail.news} />
      {newsDetail.commentLevelList.length > 0 ? (
        <CommentPost comments={newsDetail.commentLevelList} />
      ) : (
        <div
          className="w-full flex py-4 font-semibold border-solid border-gray-300 
          border-t-2 border-b-2 text-gray-700 justify-center"
        >
          Bài viết này chưa có bất kì bình luận nào
        </div>
      )}
      {!user && <FormCommentNews />}
    </div>
  );
}

export default NewsDetailLeft;
