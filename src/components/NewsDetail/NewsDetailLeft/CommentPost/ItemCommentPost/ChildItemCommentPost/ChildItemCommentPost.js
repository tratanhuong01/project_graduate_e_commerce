import React from "react";
import { Link } from "react-router-dom";

function ChildItemCommentPost(props) {
  //
  const { comment, show, setShow } = props;
  //
  return (
    <>
      <img
        src={
          comment.commentUser === null
            ? "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
            : comment.commentUser.avatar
        }
        alt=""
        className="w-14 h-14 rounded-full mr-4"
      />
      <div className="flex flex-col dark:text-white">
        <Link to="" className="font-semibold mb-2 flex">
          {comment.commentUser === null ? (
            comment.fullName
          ) : (
            <span className="flex items-center">
              {`${comment.commentUser.firstName} ${comment.commentUser.lastName}`}
            </span>
          )}
          <span className="bx bxs-check-shield text-green-500 ml-2 mt-1"></span>
        </Link>
        <span className="text-gray-500 text-xs mb-1">
          {comment.timeCreated}
        </span>
        <p className="text-gray-800 dark:text-white">{comment.content}</p>
      </div>
      {comment.level === 1 && (
        <button
          onClick={() => {
            setShow(!show);
          }}
          className="p-1 text-xs rounded-lg font-semibold text-gray-700 border-organce dark:text-white 
          border-2 border-solid hover:bg-organce hover:text-white absolute top-1 right-1"
        >
          {show ? "Đóng" : "Phản hồi"}
        </button>
      )}
    </>
  );
}

export default ChildItemCommentPost;
