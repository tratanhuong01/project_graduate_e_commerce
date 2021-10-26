import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  PAGE_PROFILE_USER,
  PROFILE_INFO,
} from "../../../../../constants/Config";
import * as modalsAction from "../../../../../actions/modal/index";
import { LOGOUT_USER } from "../../../../../constants/ActionTypes";
function CategoryIndexLeftTop(props) {
  //
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { setMenu, menu } = props;
  //
  return (
    <>
      <li className="p-2 flex">
        {user ? (
          <div className="flex items-center">
            <img
              src={user.avatar}
              className="w-10 h-10 object-cover rounded-full mr-3"
              alt=""
            />
            <Link
              to={`${PAGE_PROFILE_USER}/${PROFILE_INFO}`}
              className="font-semibold text-xm mr-1"
            >{`${user.firstName} ${user.lastName}`}</Link>
            <i className="bx bxs-chevron-down"></i>
            <div
              onClick={() => dispatch({ type: LOGOUT_USER })}
              className="w-10 h-10 rounded-full border-2 border-solid border-gray-300 bg-white text-black cursor-pointer hover:bg-organce hover:border-white hover:text-white flex justify-center ml-5"
            >
              <i className="bx bx-exit text-2xl self-center "></i>
            </div>
          </div>
        ) : (
          <div className="flex items-center flex-wrap">
            <p
              onClick={() => dispatch(modalsAction.openModalRegister())}
              className="cursor-pointer mr-3 text-xm py-2 rounded-full hover:bg-organce hover:border-white
              bg-white border-orangce text-gray-700 px-6 font-semibold border-2 border-solid hover:text-gray-100"
            >
              Đăng kí
            </p>
            <p
              onClick={() => dispatch(modalsAction.openModalLogin())}
              className="cursor-pointer mr-3 text-xm py-2 rounded-full hover:bg-organce hover:border-white
              bg-white border-orangce text-gray-700 px-6 font-semibold border-2 border-solid hover:text-gray-100"
            >
              Đăng nhập
            </p>
          </div>
        )}
      </li>
      <span
        onClick={() => setMenu(!menu)}
        className="rounded-full w-10 h-10 font-bold text-xl bg-gray-300 cursor-pointer z-50
          hover:bg-gray-500 hover:text-white flex justify-center items-center absolute top-3.5 right-3"
      >
        &times;
      </span>
    </>
  );
}

export default CategoryIndexLeftTop;
