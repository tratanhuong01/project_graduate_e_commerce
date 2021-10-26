import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RuleFormChatBot from "./RuleFormChatBot/RuleFormChatBot";
import Select from "./Select/Select";
import InputFieldFC from "../../../InputField/InputFieldFC";
import { REGEX_NUMBER_PHONE } from "../../../../../constants/Config";
import TextAreaFieldFC from "../../../TextAreaField/TextAreaFieldFC";
import * as messagesAction from "../../../../../actions/messages/index";
import { useDispatch, useSelector } from "react-redux";

function FormChatBot(props) {
  const validationSchema = Yup.object().shape({
    nickName: Yup.string().required("Vui lòng chọn cách xưng hô !!"),
    nameCustomer: Yup.string().required("Tên không được để trống !!"),
    numberCustomer: Yup.string()
      .matches(REGEX_NUMBER_PHONE, "Số điện thoại không đúng định dạng !!")
      .required("Số điện thoại không được để trống !!"),
    content: Yup.string()
      .required("Nội dung không được để trống !!")
      .max(200, "Nội dung không được quá 200 kí tự !"),
    check: Yup.boolean().oneOf([true], "Bạn phải đồng ý điều khoản trên !!"),
  });
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    shouldUnregister: false,
  });
  const { user, messages, socket } = useSelector((state) => {
    return {
      messages: state.messages,
      user: state.user,
      socket: state.socket,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    //
    if (user) {
      setValue(
        "nickName",
        user.sex === "Khác" ? (user.sex === "Nam" ? "Anh" : "Chị") : null
      );
      setValue("nameCustomer", `${user.lastName}`);
      setValue("numberCustomer", user.phone);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <form
      onSubmit={handleSubmit((data) => {
        dispatch(
          messagesAction.startChatSupportLiveRequest({
            name: data.nameCustomer,
            nickName: data.nickName,
            phone: data.numberCustomer,
            content: data.content,
            admin: messages.admin,
            socket,
          })
        );
      })}
      className="w-full overflow-y-auto scrollbar-css px-3"
      style={{ height: 400, maxHeight: 400 }}
    >
      <Select
        register={register}
        showError={errors["nickName"]}
        name="nickName"
        label="Có thể xưng hô với quý khách là:*"
      />
      <div className={`w-full my-3 relative`}>
        <label
          className={`text-gray-800 dark:text-white text-sm px-1 mb-2 font-semibold flex dark:bg-dark-third`}
        >
          {"Tên của quý khách là*"}
        </label>
      </div>
      <InputFieldFC
        type="text"
        register={register}
        showError={errors["nameCustomer"]}
        name="nameCustomer"
        className="w-full p-2 text-sm mr-5 flex  relative border-2 border-solid px-2 rounded-lg dark:border-gray-300"
        onChange={() => ""}
        placeHolder="Nhập tên của quý khách ..."
      />
      <div className={`w-full my-3 relative`}>
        <label
          className={`text-gray-800 dark:text-white  text-sm px-1 mb-2 font-semibold flex`}
        >
          {"Số điện thoại của quý khách là*"}
        </label>
      </div>
      <InputFieldFC
        type="text"
        register={register}
        showError={errors["numberCustomer"]}
        name="numberCustomer"
        className="w-full p-2 text-sm flex bg-white relative border-2 border-solid px-2 rounded-lg"
        onChange={() => ""}
        placeHolder="Số điện thoại của quý khách ..."
      />
      <div className={`w-full my-3 relative`}>
        <label
          className={`text-gray-800 dark:text-white text-sm px-1 mb-2 font-semibold flex`}
        >
          {"Nội dung*"}
        </label>
      </div>
      <TextAreaFieldFC
        type="text"
        register={register}
        showError={errors["content"]}
        name="content"
        className="w-full p-2 text-sm flex relative border-2 border-solid px-2 rounded-lg"
        onChange={() => ""}
        placeHolder="Nội dung"
      />
      <RuleFormChatBot
        register={register}
        showError={errors["check"]}
        name="check"
      />
      <div className="flex justify-center w-full py-1">
        <button
          type="submit"
          className="px-5 py-2.5 rounded-full bg-organce text-white font-semibold"
        >
          Bắt đầu chat
        </button>
      </div>
    </form>
  );
}

export default FormChatBot;
