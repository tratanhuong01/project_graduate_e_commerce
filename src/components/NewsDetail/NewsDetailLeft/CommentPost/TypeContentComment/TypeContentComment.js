import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import * as newsAction from "../../../../../actions/news/index";
function TypeContentComment(props) {
  const validationSchema = Yup.object().shape({
    content: Yup.string().required("Nội dung không được để trống!!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    shouldUnregister: false,
  });
  const { user, news, level } = useSelector((state) => {
    return {
      user: state.user,
      news: state.news,
    };
  });
  const { comment, setShow } = props;
  const dispatch = useDispatch();
  const sendComment = (data) => {
    if (level === 1)
      dispatch(
        newsAction.addCommentRequest(
          Object.assign(data, { user, news: news.news, commentReply: comment })
        )
      );
    else
      dispatch(
        newsAction.replyCommentRequest(
          Object.assign(data, {
            user,
            news: news.news,
            commentReply: comment,
            index: news.index,
          })
        )
      );
    setValue("content", "");
    setShow(false);
  };
  return (
    <form onSubmit={handleSubmit(sendComment)}>
      <div className="w-full p-2 ml-auto">
        <div className="w-full flex my-3">
          <img
            src={user.avatar}
            alt=""
            className="w-14 h-14 rounded-full mr-4"
          />
          <input
            {...register("content")}
            type="text"
            className={`w-full p-2 rounded-full border-2 border-solid dark:text-white 
            ${
              errors["content"] ? "border-red-500 " : "border-gray-200 "
            }  dark:bg-dark-third dark:border-dark-second`}
            placeholder="Nhập nội dung..."
            name="content"
          ></input>
          <button
            type="submit"
            className="w-48 md:w-36 flex font-semibold px-2 ml-3 py-1.5 text-white bg-organce-second 
             hover:bg-organce rounded-lg text-sm items-center justify-center"
          >
            <span className="bx bx-send mr-3 text-xl"></span> Bình luận
          </button>
        </div>
      </div>
    </form>
  );
}

export default TypeContentComment;
