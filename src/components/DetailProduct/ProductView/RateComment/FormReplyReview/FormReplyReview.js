import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputFieldFC from "../../../../General/InputField/InputFieldFC";
import { useDispatch, useSelector } from "react-redux";
import * as reviewProductsAction from "../../../../../actions/reviewProduct/index";
function FormReplyReview(props) {
  const { user, reviewProduct, headers, socket } = useSelector((state) => {
    return {
      user: state.user,
      reviewProduct: state.reviewProduct,
      headers: state.headers,
      socket: state.socket,
    };
  });
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Họ tên không được để trống!!"),
    email: Yup.string()
      .required("Email không được để trống!!")
      .email("Email không đúng định dạng"),
    content: Yup.string().required("Nội dung không được để trống!!"),
  });
  const { review, setShow } = props;
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
  useEffect(() => {
    //
    setValue("fullName", user ? `${user.firstName} ${user.lastName}` : "");
    setValue("email", user ? `${user.email}` : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onSubmit = (data) => {
    dispatch(
      reviewProductsAction.replyReviewProduct(
        Object.assign(data, {
          user,
          products: reviewProduct.products,
          active: reviewProduct.active,
          review,
          socket,
        }),
        headers
      )
    );
    setShow(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="w-full flex my-3">
        <div className="w-1/2 mr-2">
          <InputFieldFC
            register={register}
            showError={errors["fullName"]}
            label=""
            type="text"
            name="fullName"
            className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
            placeHolder="Nhập họ tên của bạn"
            icon="bx bx-user"
            disabled={user ? true : false}
          />
        </div>
        <div className="w-1/2">
          <InputFieldFC
            register={register}
            showError={errors["email"]}
            label=""
            type="text"
            name="email"
            className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
            placeHolder="Nhập email của bạn"
            icon="bx bx-mail-send"
            disabled={user ? true : false}
          />
        </div>
      </div>
      <div className="w-full flex items-center">
        <div className="w-9/12">
          <InputFieldFC
            onChange={(value) => setValue(value)}
            register={register}
            showError={errors["content"]}
            label=""
            type="text"
            name="content"
            className="w-full rounded-full p-2.5 border-2 border-solid pl-2.5"
            placeHolder="Nhập câu trả lời của bạn"
            icon=""
          />
        </div>
        <button
          type="submit"
          className="px-10 ml-5 py-2.5 rounded-full bg-organce text-white 
              font-semibold"
        >
          Trả lời
        </button>
      </div>
    </form>
  );
}

export default FormReplyReview;
