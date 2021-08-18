import React from "react";
import FormAccount from "./FormAccount/FormAccount";
import UpdateAvatar from "./UpdateAvatar/UpdateAvatar";

function MyAccount(props) {
  return (
    <div className="w-full text-gray-800">
      <p className="text-xl font-semibold">Hồ Sơ Của Tôi</p>
      <p className="text-sm pb-6 ">
        Quản lý thông tin hồ sơ để bảo mật tài khoản
      </p>
      <hr className="mb-3" />
      <div className="w-full flex">
        <FormAccount />
        <UpdateAvatar />
      </div>
    </div>
  );
}

export default MyAccount;
