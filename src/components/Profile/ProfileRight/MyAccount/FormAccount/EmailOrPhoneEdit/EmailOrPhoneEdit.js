import React from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../../../Utils/api";
import * as usersAction from "../../../../../../actions/user/index";
import CodeVerifyInput from "./CodeVerifyInput";
import MainEmailOrPhoneEdit from "./MainEmailOrPhoneEdit";
import { EmailOrPhoneEditProvider } from "../../../../../../contexts/EmailOrPhoneEditContext/EmailOrPhoneEditContext";
import { useHistory } from "react-router";
import { PAGE_LOGIN } from "../../../../../../constants/Config";
import FooterEmailOrPhoneEdit from "./FooterEmailEdit";

function EmailOrPhoneEdit(props) {
  //
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const updateEmailOrPhone = async (data, user, headers, emailOrPhone) => {
    user[emailOrPhone.toLowerCase()] = data.replace("+84", "0");
    await api(`users`, "PUT", user, {
      ...headers,
      "Content-Type": "application/json",
    });
    dispatch(usersAction.logoutAccount());
    history.push(PAGE_LOGIN);
  };
  //
  return (
    <EmailOrPhoneEditProvider>
      <div className="w-full text-gray-800 dark:text-white">
        <div className="w-full text-gray-800 dark:text-white">
          <p className="text-xl font-semibold">{user[`isVerify${props.emailOrPhone}`] === 0 ? "Xác nhận" :
            user[props.emailOrPhone.toLowerCase()] ? "Đổi" : "Thêm"} {props.emailOrPhone === "Email" ? `email` : "Số điện thoại"}</p>
          <p className="text-sm pb-6 ">
            Để đảm bảo tính bảo mật, vui lòng làm theo các bước sau để{" "}
            {user[`isVerify${props.emailOrPhone}`] === 0 ? "Xác nhận" :
              user[props.emailOrPhone.toLowerCase()] ? "đổi" : "thêm"} {props.emailOrPhone === "Email" ? `email` : "Số điện thoại"}
          </p>
          <hr className="mb-3" />
          <div className="w-full flex text-gray-600 dark:text-white my-5">
            <MainEmailOrPhoneEdit data={user[props.emailOrPhone.toLowerCase()]} emailOrPhone={props.emailOrPhone} />
          </div>
          <CodeVerifyInput />
          <FooterEmailOrPhoneEdit updateEmailOrPhone={updateEmailOrPhone} emailOrPhone={props.emailOrPhone} />
        </div>
      </div>
    </EmailOrPhoneEditProvider>
  );
}

export default EmailOrPhoneEdit;
