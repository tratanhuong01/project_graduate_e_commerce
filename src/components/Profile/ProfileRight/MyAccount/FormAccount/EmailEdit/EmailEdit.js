import React from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../../../Utils/api";
import * as usersAction from "../../../../../../actions/user/index";
import FooterEmailEdit from "./FooterEmailEdit";
import CodeVerifyInput from "./CodeVerifyInput";
import MainEmailEdit from "./MainEmailEdit";
import { EmailEditProvider } from "../../../../../../contexts/EmailEditContext/EmailEditContext";
import { useHistory } from "react-router";
import { PAGE_LOGIN } from "../../../../../../constants/Config";

function EmailEdit() {
  //
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const updateEmail = async (email, user, headers) => {
    user.email = email;
    await api(`users`, "PUT", user, {
      ...headers,
      "Content-Type": "application/json",
    });
    dispatch(usersAction.logoutAccount());
    history.push(PAGE_LOGIN);
  };
  //
  return (
    <EmailEditProvider>
      <div className="w-full text-gray-800 dark:text-white">
        <div className="w-full text-gray-800 dark:text-white">
          <p className="text-xl font-semibold">{user.email ? "Đổi" : "Thêm"} email</p>
          <p className="text-sm pb-6 ">
            Để đảm bảo tính bảo mật, vui lòng làm theo các bước sau để{" "}
            {user.email ? "đổi" : "thêm"} email
          </p>
          <hr className="mb-3" />
          <div className="w-full flex text-gray-600 dark:text-white my-5">
            <MainEmailEdit email={user.email} />
          </div>
          <CodeVerifyInput />
          <FooterEmailEdit updateEmail={updateEmail} />
        </div>
      </div>
    </EmailEditProvider>
  );
}

export default EmailEdit;
