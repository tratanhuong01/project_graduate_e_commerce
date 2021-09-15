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
        {`${user.email.substring(0, 2)}*********`}@gmail.com{" "}
        <span
          onClick={() => dispatch(profilesAction.loadEmailEdit())}
          className="text-blue-500 cursor-pointer ml-3 font-semibold"
        >
          Chỉnh sửa
        </span>
      </div>
      <div className="flex py-3 items-center">
        {`${user.phone.substring(0, 2)}**********${user.phone.substring(7, 9)}`}
        <span
          onClick={() => dispatch(profilesAction.loadPhoneEdit())}
          className="text-blue-500 cursor-pointer ml-3 font-semibold"
        >
          Chỉnh sửa
        </span>
      </div>
    </>
  );
}

export default EmailPhone;
