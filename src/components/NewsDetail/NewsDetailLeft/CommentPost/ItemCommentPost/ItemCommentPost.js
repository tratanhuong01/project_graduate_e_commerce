import React from "react";
import { useSelector } from "react-redux";
import ChildItemCommentPost from "./ChildItemCommentPost/ChildItemCommentPost";

function ItemCommentPost(props) {
  //
  const { comment } = props;
  const states = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const { user } = states;
  //
  return (
    <>
      <div className="w-full p-2 flex relative dark:text-white">
        <ChildItemCommentPost comment={comment.comment} user={user} />
      </div>
      <div className="w-11/12 ml-auto border-l-2 border-solid border-gray-200">
        {comment.commentList.map((commentData, index) => {
          return (
            <div className="w-full p-2 flex relative" key={index}>
              <ChildItemCommentPost comment={commentData} user={user} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ItemCommentPost;
