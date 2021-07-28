import React from "react";
import { useDispatch } from "react-redux";
import FormLogin from "../../../components/General/ModalLogin/FormLogin/FormLogin";
import * as actions from "../../../actions/index";
import LoginWith from "../../../components/General/ModalLogin/LoginWith/LoginWith";

function ModalLogin(props) {
  //
  const dispatch = useDispatch();

  return (
    <div
      className="w-11/12 xl:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      rounded-lg z-50 animate__animated animate__fadeIn"
    >
      <div className="w-full relative px-2 py-4 bg-white rounded-lg">
        <span
          onClick={() => dispatch(actions.closeModal())}
          className="rounded-full py-0.5 pb-1.5 px-2.5 font-bold text-xl bg-gray-300 cursor-pointer
        hover:bg-gray-500 hover:text-white flex justify-center items-center absolute top-3 right-3"
        >
          &times;
        </span>
        <div className="w-full mt-5 mb-2">
          <p className="w-full flex justify-center font-semibold text-3xl pt-4 pb-12">
            Đăng nhập
          </p>
          <div className="w-full flex flex-col px-5">
            <FormLogin />
            <LoginWith />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
