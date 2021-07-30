import React from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../../../actions/modal/index";

function Left(props) {
  //
  const dispatch = useDispatch();
  //
  return (
    <li className="p-2 hidden md:flex">
      {null !== null ? (
        <div className="flex items-center">
          <img
            src="/images/avatar.jpg"
            className="w-8 h-8 rounded-full mr-3"
            alt=""
          />
          <span className="font-semibold text-xm mr-1">{"user.fullName"}</span>
          <i className="bx bxs-chevron-down"></i>
          <i
            className="bx bx-exit text-2xl bg-white ml-3 text-black p-1.5 border-2 border-solid
              rounded-full cursor-pointer hover:bg-organce hover:border-white hover:text-white"
          ></i>
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
  );
}

export default Left;
