import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormCommentNews from "../../FormCommentNews/FormCommentNews";
import TypeContentComment from "../TypeContentComment/TypeContentComment";
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
  const [show, setShow] = useState(false);
  //
  return (
    <>
      <div className="w-full p-2 flex relative dark:text-white">
        <ChildItemCommentPost
          comment={comment.comment}
          user={user}
          show={show}
          setShow={setShow}
        />
      </div>
      <div className="w-11/12 ml-auto border-l-2 border-solid border-gray-200">
        {comment.commentList.map((commentData, index) => {
          return (
            <div className="w-full p-2 flex relative" key={index}>
              <ChildItemCommentPost comment={commentData} user={user} />
            </div>
          );
        })}
        {show ? (
          user ? (
            <TypeContentComment
              user={user}
              level={2}
              setShow={setShow}
              comment={comment.comment}
            />
          ) : (
            <FormCommentNews
              setShowReply={setShow}
              setShow={() => ""}
              level={2}
              comment={comment.comment}
            />
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default ItemCommentPost;
