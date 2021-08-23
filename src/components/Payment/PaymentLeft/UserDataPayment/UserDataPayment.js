import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as modalsAction from "../../../../actions/modal/index";
import * as Config from "../../../../constants/Config";
function UserDataPayment(props) {
  //
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  //
  return (
    <div className="flex">
      {user ? (
        <Link
          to={`${Config.PAGE_PROFILE_USER}/${Config.PROFILE_INFO}`}
          className="flex items-center font-semibold ml-5"
        >
          <img src={user.avatar} alt="" className="mr-3 w-8 h-8 rounded-full" />
          {`${user.firstName} ${user.lastName}`}
        </Link>
      ) : (
        <p
          onClick={() => dispatch(modalsAction.openModalLogin())}
          className="flex items-center cursor-pointer"
        >
          <i className="bx bxs-user-circle text-xl mr-2"></i>
          Đăng nhập
        </p>
      )}
    </div>
  );
}

export default UserDataPayment;
