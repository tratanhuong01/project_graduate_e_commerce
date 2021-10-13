import React from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../../../../actions/modal/index";

function EndFormLogin(props) {
  //
  const dispatch = useDispatch();
  //
  return (
    <>
      <div className="w-full flex justify-center my-5">
        <button
          type="submit"
          className="bg-organce p-3 text-white rounded-full w-1/2 hover:border-organce
                  font-bold hover:bg-white hover:text-black border-2 border-solid border-white"
        >
          Đăng nhập
        </button>
      </div>
      <div className="w-full mb-5 text-xm font-semibold flex justify-center">
        <span
          onClick={() => dispatch(modalsAction.openModalSearchGetAccount())}
          className="text-xm mr-4 text-blue-500 cursor-pointer"
        >
          Quên mật khẩu?
        </span>
        <span
          onClick={() => dispatch(modalsAction.openModalRegister())}
          className="text-xm cursor-pointer dark:text-gray-300"
        >
          Đăng kí
        </span>
      </div>
    </>
  );
}

export default EndFormLogin;
