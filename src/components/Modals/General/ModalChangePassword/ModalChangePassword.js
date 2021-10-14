import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import ModalWrapper from "../../../../containers/ModalWrapper";
import * as Yup from "yup";
import InputFieldFC from "../../../General/InputField/InputFieldFC";
import {
  CLOSE_MODAL,
  ON_LOADING_MODAL,
  OPEN_MODAL_LOGIN,
} from "../../../../constants/ActionTypes";
import api from "../../../../Utils/api";
import { useDispatch } from "react-redux";
function ModalChangePassword(props) {
  //
  const { user } = props;
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    passwordNew: Yup.string()
      .required("Mật khẩu mới không được để trống!!")
      .min(6, "Mật khẩu phải tối đa 6 kí tự"),
    passwordConfirmation: Yup.string()
      .required("Xác nhận mật khẩu không được trống !!")
      .oneOf([Yup.ref("passwordNew"), null], "Mật khẩu phải giống !!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm({
    mode: "all",
    resolver: yupResolver(validationSchema),
    shouldUnregister: false,
  });
  //
  return (
    <ModalWrapper
      title="Đổi mật khẩu"
      className="w-11/12 absolute top-1/2 left-1/2 py-4 opacity-100 bg-white z-50 border-2 border-solid border-gray-300 dark:border-dark-third shadow-lg sm:w-4/5 sm:mt-12 lg:w-3/5 xl:w-2/5 xl:mt-4 transform -translate-x-1/2 -translate-y-1/2 rounded-lg"
    >
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            dispatch({ type: ON_LOADING_MODAL });
            await api(
              `users/password/update/?idUser=${user.id}&password=${data.passwordConfirmation}`,
              "GET",
              null
            );
            dispatch({ type: OPEN_MODAL_LOGIN });
          } catch (error) {
            throw error;
          }
        })}
        className="w-10/12 mx-auto text-gray-600 dark:text-white pt-6"
      >
        <div className="w-full flex my-3">
          <div className="w-1/3 flex mt-2 justify-end">Mật khẩu mới</div>
          <div className="w-2/3 ml-3 flex items-center">
            <InputFieldFC
              register={register}
              showError={errors["passwordNew"]}
              onChange={() => ""}
              type="password"
              className="w-full p-2 border border-solid border-gray-500 dark:border-dark-second 
                dark:bg-dark-third"
              name="passwordNew"
              placeholder="Nhập mật khẩu mới"
              autoComplete={true}
            />
          </div>
        </div>

        <div className="w-full flex my-3">
          <div className="w-1/3  flex mt-2 justify-end">Xác nhận mật khẩu</div>
          <div className="w-2/3 ml-3 flex items-center">
            <InputFieldFC
              register={register}
              showError={errors["passwordConfirmation"]}
              onChange={() => ""}
              type="password"
              className="w-full p-2 border border-solid border-gray-500 dark:border-dark-second 
                dark:bg-dark-third"
              name="passwordConfirmation"
              placeholder="Nhập lại mật khẩu mới"
              autoComplete={true}
            />
          </div>
        </div>

        <div className="w-full flex">
          <div className="w-1/3 lg:w-1/4 flex-col flex items-end"></div>
          <div className="w-2/3 lg:w-3/4 ml-6 flex justify-end">
            <button
              onClick={() => dispatch({ type: CLOSE_MODAL })}
              type="button"
              className={`bg-gray-600 px-6 py-3 my-3 mr-5 text-white font-semibold`}
            >
              Hủy
            </button>
            <button
              type="submit"
              className={`bg-organce ${
                formState.isValid ? "" : "opacity-50 cursor-not-allowed"
              } px-6 py-3 my-3 text-white font-semibold`}
              disabled={formState.isValid ? false : true}
            >
              Lưu
            </button>
          </div>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default ModalChangePassword;
