import React, { useEffect } from "react";
import ImageRate from "../../../DetailProduct/ProductView/RateComment/ImageRate/ImageRate";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputFieldFC from "../../../General/InputField/InputFieldFC";
import TextAreaFieldFC from "../../../General/TextAreaField/TextAreaFieldFC";
import { useDispatch, useSelector } from "react-redux";
import * as reviewProductsAction from "../../../../actions/reviewProduct/index";
function FormSendRate(props) {
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
  const { user, indexStar, products, reviewProduct } = props;
  const headers = useSelector((state) => state.headers);
  const dispatch = useDispatch();
  const onSendRate = (data) => {
    dispatch(
      reviewProductsAction.addReviewProductRequest(
        Object.assign(data, {
          user,
          indexStar,
          products,
          active: reviewProduct.active,
        }),
        headers
      )
    );
  };
  useEffect(() => {
    setValue("fullName", user ? `${user.firstName} ${user.lastName}` : "");
    setValue("email", user ? `${user.email}` : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <form onSubmit={handleSubmit(onSendRate)} className="w-full px-8 my-3">
      <InputFieldFC
        register={register}
        showError={errors["fullName"]}
        label="Họ tên của bạn"
        type="text"
        name="fullName"
        className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
        placeHolder="Nhập họ tên của bạn"
        icon="bx bx-user"
        isset={null}
        disabled={user ? true : false}
      />
      <InputFieldFC
        register={register}
        showError={errors["email"]}
        label="Email của bạn"
        type="email"
        name="email"
        className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
        placeHolder="Nhập email của bạn"
        icon="bx bx-mail-send"
        isset={null}
        disabled={user ? true : false}
      />
      <TextAreaFieldFC
        register={register}
        showError={errors["content"]}
        label="Nội dung"
        name="content"
        className="w-full rounded-lg p-2.5 border-2 border-solid h-32 resize-none mt-2"
        placeHolder="Nhập nội dung"
        isset={null}
      />
      <ImageRate />
      <div className="w-full mb-8 mt-4 flex justify-center items-center">
        <button
          type="submit"
          className="px-10 py-2.5 rounded-full bg-organce text-white 
              font-semibold"
        >
          Gửi đánh giá
        </button>
      </div>
    </form>
  );
}

export default FormSendRate;
