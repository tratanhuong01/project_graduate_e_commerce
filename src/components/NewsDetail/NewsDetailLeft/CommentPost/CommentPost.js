import React from "react";
import ItemCommentPost from "./ItemCommentPost/ItemCommentPost";

function CommentPost(props) {
  return (
    <div className="w-full p-2 my-5">
      <div className="flex text-xl my-3">
        <p
          className="p-2 border-b-2 border-solid border-organce 
        text-gray-700 flex items-center"
        >
          BÌNH LUẬN
        </p>
        <p className="flex items-center text-gray-700">( 03 )</p>
      </div>
      <ItemCommentPost />
    </div>
  );
}

export default CommentPost;
