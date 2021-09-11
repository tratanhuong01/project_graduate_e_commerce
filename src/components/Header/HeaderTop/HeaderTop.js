import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as usersAction from "../../../actions/user";
import * as modalsAction from "../../../actions/modal/index";
import { Link } from "react-router-dom";
import * as Config from "../../../constants/Config";
import PopupNotify from "./PopupNotify/PopupNotify";

function HeaderTop(props) {
  //
  const states = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const { user } = states;
  const dispatch = useDispatch();
  //
  return (
    <div className="xl:w-4/5 hidden px-3 w-full mx-auto md:flex text-gray-500 dark:text-gray-300 text-xs py-4 items-center header__top">
      <div className="md:w-3/12 lg:w-1/2 flex items-center">
        <span className="bx bx-phone ml-3 mr-2"></span>
        <span className="mr-4 hover:text-organce cursor-pointer">
          0354114665
        </span>
        <span className="bx bx-mail-send mr-2"></span>
        <span className="mr-4 hover:text-organce cursor-pointer">
          tratanhuong01@gmail.com
        </span>
      </div>
      <div className="md:w-10/12 lg:w-1/2 flex justify-end items-center">
        <ul className="flex justify-end items-center font-semibold">
          {user && (
            <>
              <li className="flex items-center relative notify__cursor">
                <div className="bx bx-bell ml-1 mr-2 text-2xl relative">
                  <span className="w-4 h-4 rounded-full flex bg-organce text-white absolute -top-1 -right-1 justify-center items-center">
                    3
                  </span>
                </div>
                <span className="mr-4 hover:text-organce cursor-pointer">
                  Thông báo
                </span>
                <PopupNotify />
              </li>
              <li className="flex items-center">
                <Link
                  to={`${Config.PAGE_PROFILE_USER}/${Config.PROFILE_INFO}`}
                  className="flex items-center"
                >
                  <span className="bx bx-user ml-1 mr-2"></span>
                  <span className="mr-4 hover:text-organce cursor-pointer">
                    {`${user.firstName} ${user.lastName}`}
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to={`${Config.PAGE_PROFILE_USER}/${Config.PROFILE_BILL}`}
                  className="flex items-center"
                >
                  <span className="bx bxl-paypal ml-1 mr-2"></span>
                  <span className="mr-4 hover:text-organce cursor-pointer">
                    Hóa đơn
                  </span>
                </Link>
              </li>
            </>
          )}
          {!user ? (
            <>
              <li
                onClick={() => dispatch(modalsAction.openModalLogin())}
                className="flex items-center"
              >
                <span className="bx bx-lock ml-1 mr-2"></span>
                <span className="mr-4 hover:text-organce cursor-pointer">
                  Đăng nhập
                </span>
              </li>
              <li
                onClick={() => dispatch(modalsAction.openModalRegister())}
                className="flex items-center"
              >
                <span className="bx bx-lock ml-1 mr-2"></span>
                <span className="hover:text-organce cursor-pointer">
                  Đăng kí
                </span>
              </li>
            </>
          ) : (
            <li
              onClick={() => dispatch(usersAction.logoutAccount())}
              className="flex items-center"
            >
              <span className="bx bx-log-in-circle ml-1 mr-2"></span>
              <span className="mr-4 hover:text-organce cursor-pointer">
                Đăng xuất
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default HeaderTop;
