import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { REGEX_NUMBER_PHONE } from "../../../../constants/Config";
import api from "../../../../Utils/api";
import InputFieldFC from "../../../General/InputField/InputFieldFC";
import TextAreaFieldFC from "../../../General/TextAreaField/TextAreaFieldFC";

function FormContact(props) {
  //
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Họ tên không được để trống!!"),
    phone: Yup.string()
      .matches(REGEX_NUMBER_PHONE, "Số điện thoại không đúng định dạng !!")
      .required("Số điện thoại không được để trống !!"),
    email: Yup.string()
      .required("Email không được để trống!!")
      .email("Email không đúng định dạng"),
    content: Yup.string().required("Nội dung không được để trống!!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    shouldUnregister: false,
  });
  const { setIsSend } = props;
  const submit = async (data) => {
    await api(`contacts`, "POST", {
      id: null,
      email: data.email,
      phone: data.phone,
      fullName: data.fullName,
      content: data.content,
      timeCreated: null,
    });
    setIsSend(true);
    window.scrollTo(0, 510);
  };
  //
  return (
    <form className="w-full my-4 py-2" onSubmit={handleSubmit(submit)}>
      <div className="w-full my-6 flex">
        <div className="w-1/2 mr-5">
          <InputFieldFC
            register={register}
            showError={errors["fullName"]}
            name="fullName"
            type="text"
            placeHolder="Họ tên"
            className="w-full p-3 rounded-full border-2 border-solid border-gray-200 
            dark:bg-dark-third dark:border-dark-second"
          />
        </div>
        <div className="w-1/2">
          <InputFieldFC
            register={register}
            showError={errors["phone"]}
            name="phone"
            type="text"
            placeHolder="Số điện thoại"
            className="w-full p-3 rounded-full border-2 border-solid border-gray-200 
            dark:bg-dark-third dark:border-dark-second"
          />
        </div>
      </div>
      <div className="w-full mb-6 flex">
        <InputFieldFC
          register={register}
          showError={errors["email"]}
          name="email"
          placeHolder="Email"
          className="w-full mr-5 p-3 rounded-full border-2 border-solid border-gray-200 
            dark:bg-dark-third dark:border-dark-second"
        />
      </div>
      <TextAreaFieldFC
        register={register}
        showError={errors["content"]}
        name="content"
        placeHolder="Nội dung liên hệ"
        className="w-full mr-5 p-3 rounded-xl border-2 border-solid border-gray-200 
        dark:bg-dark-third dark:border-dark-second resize-none h-32 max-h-32"
      />
      <button
        type="submit"
        className="w-32 p-3 rounded-full text-white bg-organce hover:text-organce font-semibold hover:bg-white border-2 border-solid border-white hover:border-organce dark:bg-dark-second mt-4 dark:hover:bg-dark-third dark:hover:text-white"
      >
        Gửi liên hệ
      </button>
    </form>
  );
}

export default FormContact;
