import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // LOGOUT_USER,
  // OPEN_MODAL_LOGIN,
  OPEN_MODAL_SEARCH_GET_ACCOUNT,
} from "../../../../../../constants/ActionTypes";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputFieldFC from "../../../../../General/InputField/InputFieldFC";
import api from "../../../../../../Utils/api";

function FormChangePassword(props) {
  //
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    passwordCurrent: Yup.string()
      .required("Mật khẩu hiện tại không được để trống!!")
      .test("checkPassword", "Mật khẩu không chính xác", async (value) => {
        const result = await api(
          `users/password/?idUser=${user.id}&password=${value}`,
          "GET",
          null
        );
        return result.data;
      }),
    passwordNew: Yup.string()
      .required("Mật khẩu mới không được để trống!!")
      .notOneOf(
        [Yup.ref("passwordCurrent"), null],
        "Mật khẩu mới phải khác mật khẩu hiện tại !!"
      ),
    passwordConfirmation: Yup.string()
      .required("Xác nhận mật khẩu không được trống !!")
      .oneOf([Yup.ref("passwordNew"), null], "Mật khẩu phải giống !!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
    setValue,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    shouldUnregister: false,
  });
  //
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await api(
          `users/password/update/?idUser=${user.id}&password=${data.passwordConfirmation}`,
          "GET",
          null
        );
        setValue("passwordCurrent", "");
        setValue("passwordNew", "");
        setValue("passwordConfirmation", "");
        // dispatch({ type: LOGOUT_USER });
        // dispatch({ type: OPEN_MODAL_LOGIN });
      })}
      className="w-full text-gray-600 dark:text-white pt-6"
    >
      <div className="w-full flex my-3">
        <div className="w-1/3 lg:w-1/4 flex mt-2 justify-end">
          Mật khẩu hiện tại
        </div>
        <div className="w-2/3 lg:w-3/4 ml-6 flex items-center ">
          <div className="w-2/3 lg:w-1/2">
            <InputFieldFC
              register={register}
              showError={errors["passwordCurrent"]}
              onChange={() => ""}
              type="password"
              className="w-full p-2 border border-solid dark:bg-dark-third dark:border-dark-second 
            border-gray-300"
              name="passwordCurrent"
              placeholder=""
              autoComplete={true}
            />
          </div>
          <span
            onClick={() => dispatch({ type: OPEN_MODAL_SEARCH_GET_ACCOUNT })}
            className="text-xs lg:text-sm ml-5 mb-2 text-blue-500 font-semibold cursor-pointer"
          >
            Quên mật khẩu ?
          </span>
        </div>
      </div>

      <div className="w-full flex my-3">
        <div className="w-1/3 lg:w-1/4 flex mt-2 justify-end">Mật khẩu mới</div>
        <div className="w-2/3 lg:w-3/4 ml-6 flex items-center">
          <InputFieldFC
            register={register}
            showError={errors["passwordNew"]}
            onChange={() => ""}
            type="password"
            className="w-2/3 lg:w-1/2 p-2 border border-solid border-gray-300 dark:border-dark-second 
                dark:bg-dark-third"
            name="passwordNew"
            placeholder=""
            autoComplete={true}
          />
        </div>
      </div>

      <div className="w-full flex my-3">
        <div className="w-1/3 lg:w-1/4 flex mt-2 justify-end">
          Xác nhận mật khẩu
        </div>
        <div className="w-2/3 lg:w-3/4 ml-6 flex items-center">
          <InputFieldFC
            register={register}
            showError={errors["passwordConfirmation"]}
            onChange={() => ""}
            type="password"
            className="w-2/3 lg:w-1/2 p-2 border border-solid border-gray-300 dark:border-dark-second 
                dark:bg-dark-third"
            name="passwordConfirmation"
            placeholder=""
            autoComplete={true}
          />
        </div>
      </div>

      <div className="w-full flex">
        <div className="w-1/3 lg:w-1/4 flex-col flex items-end"></div>
        <div className="w-2/3 lg:w-3/4 ml-6">
          <button
            type="submit"
            className={`bg-organce ${
              formState.isValid ? "" : "opacity-50 cursor-not-allowed"
            } px-6 py-2 my-3 text-white font-semibold`}
            disabled={formState.isValid ? false : true}
          >
            Lưu
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormChangePassword;
