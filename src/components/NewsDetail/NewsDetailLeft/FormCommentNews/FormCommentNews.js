import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputFieldFC from "../../../General/InputField/InputFieldFC";
import TextAreaFieldFC from "../../../General/TextAreaField/TextAreaFieldFC";
import { useDispatch } from "react-redux";
import * as newsAction from "../../../../actions/news/index";

function FormCommentNews(props) {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Họ tên không được để trống!!"),
    email: Yup.string()
      .required("Email không được để trống!!")
      .email("Email không đúng định dạng"),
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
  const { level, setShow, setShowReply, comment } = props;
  const { user, news, headers, socket } = useSelector((state) => {
    return {
      user: state.user,
      news: state.news,
      headers: state.headers,
      socket: state.socket,
    };
  });
  const dispatch = useDispatch();
  const sendComment = (data) => {
    if (level === 1)
      dispatch(
        newsAction.addCommentRequest(
          Object.assign(data, { user, news: news.news, socket }),
          headers
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
            socket,
          }),
          headers
        )
      );
    setShow(false);
    setShowReply(false);
  };
  useEffect(() => {
    setValue("fullName", user ? `${user.firstName} ${user.lastName}` : "");
    setValue("email", user ? `${user.email}` : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <form onSubmit={handleSubmit(sendComment)}>
      <div className="w-full my-2">
        <div className="w-full flex">
          <div className="w-1/2 mr-4">
            <InputFieldFC
              register={register}
              showError={errors["fullName"]}
              label="Họ tên của bạn"
              type="text"
              name="fullName"
              className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
              placeHolder="Nhập họ tên của bạn"
              icon="bx bx-user"
              onChange={() => ""}
              disabled={user ? true : false}
            />
          </div>
          <div className="w-1/2">
            <InputFieldFC
              register={register}
              showError={errors["email"]}
              label="Email của bạn"
              type="text"
              name="email"
              onChange={() => ""}
              className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
              placeHolder="Nhập email của bạn"
              icon="bx bx-mail-send"
              disabled={user ? true : false}
            />
          </div>
        </div>
        <div className="w-full">
          <TextAreaFieldFC
            register={register}
            showError={errors["content"]}
            label="Nội dung"
            onChange={() => ""}
            name="content"
            className="w-full rounded-lg p-2.5 border-2 border-solid h-32 resize-none mt-2"
            placeHolder="Nhập nội dung"
            isset={null}
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full p-2.5 rounded-full bg-organce text-white 
              font-semibold"
      >
        Bình luận
      </button>
    </form>
  );
}

export default FormCommentNews;
