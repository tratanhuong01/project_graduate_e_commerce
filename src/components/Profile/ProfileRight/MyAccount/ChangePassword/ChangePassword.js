import React from "react";
import { useDispatch } from "react-redux";
import InputChangePassword from "./InputChangePassword/InputChangePassword";
import * as modalsAction from "../../../../../actions/modal/index";

function ChangePassword(props) {
  //
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full text-gray-800">
      <p className="text-xl font-semibold">Đổi Mật Khẩu</p>
      <p className="text-sm pb-6 ">
        Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
      </p>
      <hr className="mb-3" />
      <div className="w-full flex text-gray-600">
        <div className="w-1/4 flex-col flex items-end">
          <div className="flex my-2.5 py-3 items-center">Mật khẩu hiện tại</div>
          <div className="flex my-5 items-center">Mật khẩu mới</div>
          <div className="flex my-5 items-center">Nhập lại mật khẩu mới</div>
        </div>
        <div className="w-3/4 ml-6">
          <div className="flex py-3 items-center">
            <input
              type="password"
              className="w-1/2 p-2 border border-solid border-gray-300"
              placeholder=""
            />
            <span
              onClick={() => dispatch(modalsAction.openModalSearchGetAccount())}
              className="ml-5 text-blue-500 font-semibold cursor-pointer"
            >
              Quên mật khẩu ?
            </span>
          </div>
          <InputChangePassword />
          <InputChangePassword />
          <button className="bg-organce opacity-50 cursor-not-allowed px-6 py-2 my-3 text-white font-semibold">
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
