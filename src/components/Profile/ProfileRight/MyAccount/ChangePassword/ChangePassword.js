import React from "react";
import { useDispatch } from "react-redux";
import InputChangePassword from "./InputChangePassword/InputChangePassword";
import * as modalsAction from "../../../../../actions/modal/index";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import {
  PAGE_PROFILE_USER,
  PROFILE_CHANGE_PASSWORD,
} from "../../../../../constants/Config";
function ChangePassword(props) {
  //
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full text-gray-800 dark:text-white ml-0 md:ml-4 lg:pl-0">
      <BreadcrumbsItem to={`${PAGE_PROFILE_USER}/${PROFILE_CHANGE_PASSWORD}`}>
        Đổi mật khẩu
      </BreadcrumbsItem>
      <p className="text-xl font-semibold mt-1.5 lg:mt-0">Đổi Mật Khẩu</p>
      <p className="text-sm pb-6 ">
        Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
      </p>
      <hr className="mb-3" />
      <div className="w-full flex text-gray-600 dark:text-white">
        <div className="w-1/3 lg:w-1/4 flex-col flex items-end">
          <div className="flex my-2.5 py-3 items-center">Mật khẩu hiện tại</div>
          <div className="flex my-5 items-center">Mật khẩu mới</div>
          <div className="flex my-5 items-center">Nhập lại mật khẩu mới</div>
        </div>
        <div className="w-2/3 lg:w-3/4 ml-6">
          <div className="flex py-3 items-center">
            <input
              type="password"
              className="w-2/3 lg:w-1/2 p-2 border border-solid border-gray-300 dark:border-dark-second 
              dark:bg-dark-third"
              placeholder=""
            />
            <span
              onClick={() => dispatch(modalsAction.openModalSearchGetAccount())}
              className="text-xs lg:text-sm ml-5 text-blue-500 font-semibold cursor-pointer"
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
