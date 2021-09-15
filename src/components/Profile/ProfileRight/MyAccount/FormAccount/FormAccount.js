import React, { useEffect, useState } from "react";
import {
  PAGE_PROFILE_USER,
  PROFILE_INFO,
} from "../../../../../constants/Config";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import EmailPhone from "./EmailPhone/EmailPhone";
import InputFieldFC from "../../../../General/InputField/InputFieldFC";
import api from "../../../../../Utils/api";

function FormAccount(props) {
  //
  const { user } = props;
  const genders = ["Nam", "Nữ", "Khác"];
  const [gender, setGender] = useState(user.sex);
  const validationSchema = Yup.object().shape({
    lastName: Yup.string().required("Họ tên không được để trống!!"),
    firstName: Yup.string().required("Họ tên không được để trống!!"),
    sex: Yup.string().required("Họ tên không được để trống!!"),
    birthday: Yup.date("Ngày sinh không hợp lệ!!").required(
      "Ngày sinh không được để trống!!"
    ),
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
  useEffect(() => {
    setValue("firstName", user.firstName);
    setValue("lastName", user.lastName);
    setValue("sex", user.sex);
    setValue(
      "birthday",
      `${user.birthday.split(" ")[0].split("-")[2]}-${
        user.birthday.split(" ")[0].split("-")[0]
      }-${user.birthday.split(" ")[0].split("-")[1]}`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const updateInfoUser = async (data) => {
    let clone = { ...user };
    clone.sex = data.sex;
    clone.firstName = data.firstName;
    clone.lastName = data.lastName;
    clone.birthday = data.birthday;
    await api("users", "PUT", clone);
  };
  //
  return (
    <form
      onSubmit={handleSubmit(updateInfoUser)}
      className="w-full md:w-3/4 flex"
    >
      <BreadcrumbsItem to={`${PAGE_PROFILE_USER}/${PROFILE_INFO}`}>
        Hồ sơ
      </BreadcrumbsItem>
      <div className="w-1/4 flex-col flex ">
        <div className="flex py-3 items-center my-3">Họ và tên</div>
        <div className="flex py-3 items-center">Email</div>
        <div className="flex py-3 items-center">Số điện thoại</div>
        <div className="flex py-3 items-center">Giói tinh</div>
        <div className="flex py-5 items-center">Ngày sinh</div>
      </div>
      <div className="w-3/4">
        <div className="w-full flex items-center my-3">
          <div className="w-1/2 mr-5">
            <InputFieldFC
              register={register}
              showError={errors["firstName"]}
              type="text"
              className="w-full p-2 border border-solid dark:bg-dark-third dark:border-dark-second 
            border-gray-300"
              onChange={() => ""}
              name="firstName"
              placeholder="Nhập họ"
            />
          </div>
          <div className="w-1/2 mr-5">
            <InputFieldFC
              register={register}
              showError={errors["lastName"]}
              onChange={() => ""}
              type="text"
              className="w-full p-2 border border-solid dark:bg-dark-third dark:border-dark-second 
            border-gray-300"
              name="lastName"
              placeholder="Nhập tên"
            />
          </div>
        </div>
        <EmailPhone user={user} />
        <div className="flex py-3 mt-0.5 items-center">
          {genders.map((item, index) => {
            return (
              <div key={index}>
                <input
                  {...register("sex")}
                  type="radio"
                  name="sex"
                  className="transform scale-125"
                  onChange={() => {
                    setGender(item);
                    setValue("sex", item);
                  }}
                  value={item}
                  checked={item === gender ? true : false}
                />
                <span className="mx-2 mr-6">{item}</span>
              </div>
            );
          })}
        </div>
        <div className="flex py-3 items-center mt-0.5 text-sm">
          <input
            {...register("birthday")}
            type="date"
            name="birthday"
            className="w-auto border-2 border-solid border-gray-300 px-1 py-2 cursor-pointer mr-2 dark:bg-dark-third dark:border-dark-second dark:text-white"
            onChange={(event) => setValue("birthday", event.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-organce px-6 py-2 my-3 text-white font-semibold"
        >
          Lưu
        </button>
      </div>
    </form>
  );
}

export default FormAccount;
