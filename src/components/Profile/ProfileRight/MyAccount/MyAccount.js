import React from "react";
import { useSelector } from "react-redux";
import FormAccount from "./FormAccount/FormAccount";
import UpdateAvatar from "./UpdateAvatar/UpdateAvatar";

function MyAccount(props) {
  //
  const states = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const { user } = states;
  //
  return (
    <div className="w-full text-gray-800 dark:text-white">
      <p className="text-xl font-semibold">Hồ Sơ Của Tôi</p>
      <p className="text-sm pb-6 ">
        Quản lý thông tin hồ sơ để bảo mật tài khoản
      </p>
      <hr className="mb-3" />
      <div className="w-full flex flex-col-reverse md:flex-row">
        <FormAccount user={user} />
        <UpdateAvatar user={user} />
      </div>
    </div>
  );
}

export default MyAccount;
