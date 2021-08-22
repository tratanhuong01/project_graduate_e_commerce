import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../../../General/Pagination/Pagination";
import ItemCommentPost from "./ItemCommentPost/ItemCommentPost";
import TypeContentComment from "./TypeContentComment/TypeContentComment";

function CommentPost(props) {
  //
  const { comments } = props;
  const states = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const { user } = states;
  //
  return (
    <div className="w-full p-2 my-5">
      <div className="flex text-xl my-3">
        <p
          className="p-2 border-b-2 border-solid border-organce 
        text-gray-700 flex items-center dark:text-white"
        >
          BÌNH LUẬN
        </p>
        <p className="flex items-center text-gray-700  dark:text-white">
          ( {comments.length} )
        </p>
      </div>
      {user && <TypeContentComment user={user} />}
      <div className="w-full">
        {comments.map((comment, index) => {
          return <ItemCommentPost comment={comment} key={index} />;
        })}
      </div>
      <div
        className="w-full flex justify-center p-2 border-solid border-gray-100 my-2  
      border-t-2 border-b-2"
      >
        <Pagination />
      </div>
    </div>
  );
}

export default CommentPost;
