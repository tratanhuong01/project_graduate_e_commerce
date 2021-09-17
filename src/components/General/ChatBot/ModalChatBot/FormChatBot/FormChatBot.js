import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RuleFormChatBot from "./RuleFormChatBot/RuleFormChatBot";
import Select from "./Select/Select";
import InputFieldFC from "../../../InputField/InputFieldFC";
import { REGEX_NUMBER_PHONE } from "../../../../../constants/Config";
import * as messagesApi from "../../../../../api/messagesApi";
import TextAreaFieldFC from "../../../TextAreaField/TextAreaFieldFC";

function FormChatBot(props) {
  const { setGroupChat, userSupport } = props;
  const validationSchema = Yup.object().shape({
    nickName: Yup.string().required("Vui lòng chọn cách xưng hô !!"),
    nameCustomer: Yup.string().required("Tên không được để trống !!"),
    numberCustomer: Yup.string()
      .matches(REGEX_NUMBER_PHONE, "Số điện thoại không đúng định dạng !!")
      .required("Số điện thoại không được để trống !!"),
    content: Yup.string().required("Số điện thoại không được để trống !!"),
    check: Yup.boolean().oneOf([true], "Bạn phải đồng ý điều khoản trên !!"),
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
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        const groupChat = await messagesApi.addGroupChat({
          id: null,
          fullName: data.nameCustomer,
          phone: data.numberCustomer,
          sex: data.nickName,
          avatar: "https://vacpa.edu.vn/Content/images/avatar/avatar.png",
          typeGroupChat: 0,
          timeCreated: null,
        });
        await messagesApi.addMessages({
          id: null,
          userMessages: userSupport,
          groupChatMessages: groupChat.data,
          guest: null,
          content: `🥰🥰 Chào mừng ${data.nickName} đã đến với hsmart , ${data.nickName} cần hổ trợ gì ạ ? 🥰🥰 `,
          images: null,
          timeCreated: null,
          typeMessages: 0,
        });
        await messagesApi.addMessages({
          id: null,
          userMessages: null,
          groupChatMessages: groupChat.data,
          guest: null,
          content: data.content,
          images: null,
          timeCreated: null,
          typeMessages: 0,
        });
        await messagesApi.addMessages({
          id: null,
          userMessages: null,
          groupChatMessages: groupChat.data,
          guest: null,
          content: null,
          images: null,
          timeCreated: null,
          typeMessages: -1,
        });
        setGroupChat(groupChat.data);
      })}
    >
      <Select
        register={register}
        showError={errors["nickName"]}
        name="nickName"
        label="Có thể xưng hô với quý khách là:*"
      />
      <div className={`w-full my-3 relative`}>
        <label
          className={`text-gray-800 dark:text-white bg-white text-sm px-1 mb-2 font-semibold flex`}
        >
          {"Tên của quý khách là*"}
        </label>
      </div>
      <InputFieldFC
        type="text"
        register={register}
        showError={errors["nameCustomer"]}
        name="nameCustomer"
        className="w-full p-2 text-sm mr-5 flex bg-white relative border-2 border-solid px-2 rounded-lg"
        onChange={() => ""}
        placeHolder="Nhập tên của quý khách ..."
      />
      <div className={`w-full my-3 relative`}>
        <label
          className={`text-gray-800 dark:text-white bg-white text-sm px-1 mb-2 font-semibold flex`}
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
          className={`text-gray-800 dark:text-white bg-white text-sm px-1 mb-2 font-semibold flex`}
        >
          {"Nội dung*"}
        </label>
      </div>
      <TextAreaFieldFC
        type="text"
        register={register}
        showError={errors["content"]}
        name="content"
        className="w-full p-2 text-sm flex bg-white relative border-2 border-solid px-2 rounded-lg"
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
