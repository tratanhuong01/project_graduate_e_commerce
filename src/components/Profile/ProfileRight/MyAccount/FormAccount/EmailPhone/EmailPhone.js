import React from "react";
import { useDispatch } from "react-redux";
import * as profilesAction from "../../../../../../actions/profile/index";

function EmailPhone(props) {
  //
  const { user } = props;
  const dispatch = useDispatch();
  //
  return (
    <>
      <div className="flex py-3 items-center">
        {user.email
          ? `${user.email.substring(0, 2)}*********@gmail.com`
          : "Chưa có email"}
        <span
          onClick={() => dispatch(profilesAction.loadEmailEdit(user.email))}
          className="text-blue-500 cursor-pointer ml-3 font-semibold"
        >
          {user.email ? "Chỉnh sửa" : "Thêm email"}
        </span>
      </div>
      <div className="flex py-3 items-center">
        {user.phone
          ? `${user.phone.substring(0, 2)}**********${user.phone.substring(
              7,
              9
            )}`
          : "Chưa có số điện thoại"}
        <span
          onClick={() => dispatch(profilesAction.loadPhoneEdit(user.phone))}
          className="text-blue-500 cursor-pointer ml-3 font-semibold"
        >
          {user.phone ? "Chỉnh sửa" : "Thêm số điện thọai"}
        </span>
      </div>
    </>
  );
}

export default EmailPhone;
