import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as modalsAction from "../../../../actions/modal/index";
import * as Config from "../../../../constants/Config";

function TitlePayment(props) {
  //
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {}, [user]);
  //
  return (
    <div className="w-full h-10 mb-3.5">
      <div className="float-left font-semibold text-xl">
        Thông tin nhận hàng
      </div>
      <div className="text-organce flex float-right">
        {user ? (
          <Link
            to={`${Config.PAGE_PROFILE_USER}/${Config.PROFILE_INFO}`}
            className="flex items-center font-semibold"
          >
            <img
              src={user.avatar}
              alt=""
              className="mr-3 w-8 h-8 rounded-full"
            />
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
    </div>
  );
}

export default TitlePayment;
