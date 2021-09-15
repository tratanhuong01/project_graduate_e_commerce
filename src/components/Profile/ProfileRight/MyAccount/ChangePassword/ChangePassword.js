import React from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import {
  PAGE_PROFILE_USER,
  PROFILE_CHANGE_PASSWORD,
} from "../../../../../constants/Config";
import FormChangePassword from "./FormChangePassword/FormChangePassword";

function ChangePassword(props) {
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
      <div className="w-full text-gray-600 dark:text-white">
        <FormChangePassword />
      </div>
    </div>
  );
}

export default ChangePassword;
