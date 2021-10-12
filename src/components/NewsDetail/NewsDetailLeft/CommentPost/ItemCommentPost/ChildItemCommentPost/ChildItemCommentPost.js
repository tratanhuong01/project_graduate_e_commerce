import React from "react";

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
        className="w-14 h-14 rounded-full object-cover mr-4"
        loading="lazy"
      />
      <div className="flex flex-col dark:text-white">
        <p className="font-semibold mb-2 flex">
          {comment.commentUser === null ? (
            comment.fullName
          ) : (
            <span className="flex items-center">
              {`${comment.commentUser.firstName} ${comment.commentUser.lastName}`}
            </span>
          )}
          {comment.commentUser
            ? comment.commentUser.userRole
              ? comment.commentUser.userRole.id !== "CUSTOMER" && (
                  <span className="px-2 rounded-full ml-3 py-1 border-2 border-solid border-organce font-semibold text-xs flex items-center">
                    <span className="bx bxs-check-shield text-green-500 ml-1"></span>
                    Quản trị viên
                  </span>
                )
              : ""
            : ""}
        </p>
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
