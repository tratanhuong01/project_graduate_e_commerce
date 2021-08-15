import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TypeContentComment from "../TypeContentComment/TypeContentComment";

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
      <div className="w-full p-2 flex relative">
        <img
          src={
            comment.comment.commentUser === null
              ? "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
              : "http://www.thetahmid.com/themes/tennews-v1.1/images/comm-1.jpg"
          }
          alt=""
          className="w-14 h-14 rounded-full mr-4"
        />
        <div className="flex flex-col">
          <Link to="" className="font-semibold mb-2 flex">
            {comment.comment.commentUser === null ? (
              comment.comment.fullName
            ) : (
              <span className="flex items-center">
                {`${comment.comment.commentUser.firstName} ${comment.comment.commentUser.lastName}`}
              </span>
            )}
            <span className="bx bxs-check-shield text-green-500 ml-2 mt-1"></span>
          </Link>
          <span className="text-gray-500 text-xs mb-1">
            {comment.comment.timeCreated}
          </span>
          <p className="text-gray-800">{comment.comment.content}</p>
        </div>
        <button
          className="p-1 text-xs rounded-lg font-semibold text-gray-700 border-organce 
          border-2 border-solid hover:bg-organce hover:text-white absolute top-1 right-1"
        >
          Phản hồi
        </button>
      </div>
      <div className="w-11/12 ml-auto border-l-2 border-solid border-gray-200">
        {comment.commentList.map((commentData, index) => {
          return (
            <div className="w-full p-2 flex relative" key={index}>
              <img
                src={
                  commentData.commentUser === null
                    ? "https://winaero.com/blog/wp-content/uploads/2019/09/Chrome-Incognito-Mode-Icon-256.png"
                    : "http://www.thetahmid.com/themes/tennews-v1.1/images/comm-1.jpg"
                }
                alt=""
                className="w-14 h-14 rounded-full mr-4"
              />
              <div className="flex flex-col">
                <Link to="" className="font-semibold mb-2">
                  {commentData.commentUser === null ? (
                    commentData.fullName
                  ) : (
                    <span className="flex items-center">
                      {`${commentData.commentUser.firstName} ${commentData.commentUser.lastName}`}
                    </span>
                  )}
                  <span className="bx bxs-check-shield text-green-500 ml-2 mt-1"></span>
                </Link>
                <span className="text-gray-500 text-xs mb-1">
                  {commentData.timeCreated}
                </span>
                <p className="text-gray-800">{commentData.content}</p>
              </div>
              <button
                className="p-1 text-xs rounded-lg font-semibold text-gray-700 border-organce 
                border-2 border-solid hover:bg-organce hover:text-white absolute top-1 right-1"
              >
                Phản hồi
              </button>
            </div>
          );
        })}
      </div>
      {user && <TypeContentComment user={user} />}
    </>
  );
}

export default ItemCommentPost;
