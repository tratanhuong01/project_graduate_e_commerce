import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../Utils/api";
import Pagination from "../../../General/Pagination/Pagination";
import FormCommentNews from "../FormCommentNews/FormCommentNews";
import ItemCommentPost from "./ItemCommentPost/ItemCommentPost";
import TypeContentComment from "./TypeContentComment/TypeContentComment";
import * as newsAction from "../../../../actions/news/index";
function CommentPost(props) {
  //
  const { newsDetail } = props;
  const dispatch = useDispatch();
  const states = useSelector((state) => {
    return {
      user: state.user,
      news: state.news,
    };
  });
  const { user, news } = states;
  useEffect(() => {
    //
    async function fetch() {
      const result_1 = await api(
        `commentsAll/${newsDetail.news.id}`,
        "GET",
        null
      );
      const result_2 = await api(
        `comments/${newsDetail.news.id}/0/5`,
        "GET",
        null
      );
      dispatch(
        newsAction.loadNewsData({
          commentsAll: result_1.data,
          comments: result_2.data,
          news: newsDetail.news,
        })
      );
    }
    fetch();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsDetail]);
  const [show, setShow] = useState(true);
  //
  return (
    <>
      {show && !user && (
        <FormCommentNews setShow={setShow} level={1} setShowReply={() => ""} />
      )}
      {news.comments ? (
        <div className="w-full p-2 my-5">
          <div className="flex text-xl my-3">
            <p
              className="p-2 border-b-2 border-solid border-organce 
              text-gray-700 flex items-center dark:text-white"
            >
              BÌNH LUẬN
            </p>
            <p className="flex items-center text-gray-700  dark:text-white">
              ( {news.commentsAll} )
            </p>
          </div>
          {user && (
            <TypeContentComment setShow={() => ""} user={user} level={1} />
          )}
          <div className="w-full">
            {news.comments.map((comment, index) => {
              return <ItemCommentPost comment={comment} key={index} />;
            })}
          </div>
          <div
            className="w-full flex justify-center p-2 border-solid border-gray-100 my-2  
            border-t-2 border-b-2"
          >
            <Pagination
              length={news.commentsAll}
              index={news.index}
              limit={5}
              dispatch={(index) => {
                dispatch(
                  newsAction.loadNewsIndexPageRequest({
                    index,
                    news: news.news,
                  })
                );
              }}
            />
          </div>
        </div>
      ) : (
        <div
          className="w-full flex py-4 font-semibold border-solid border-gray-300 
          border-t-2 border-b-2 text-gray-700 justify-center"
        >
          Bài viết này chưa có bất kì bình luận nào
        </div>
      )}
    </>
  );
}

export default CommentPost;
