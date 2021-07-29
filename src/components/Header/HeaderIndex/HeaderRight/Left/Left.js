import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../../actions/index";

function Left(props) {
  //
  const states = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const { user } = states;
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(actions.checkHaveLogin());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <li className="p-2 hidden md:flex">
      {user !== null ? (
        <div className="flex items-center">
          <img
            src="/images/avatar.jpg"
            className="w-8 h-8 rounded-full mr-3"
            alt=""
          />
          <span className="font-semibold text-xm mr-1">{user.fullName}</span>
          <i className="bx bxs-chevron-down"></i>
          <i
            onClick={() => {
              dispatch(actions.logoutUser());
              dispatch(actions.checkHaveLogin());
              dispatch(actions.resetDetailProduct());
              dispatch(actions.getAllCartRequest(null));
            }}
            className="bx bx-exit text-2xl bg-white ml-3 text-black p-1.5 border-2 border-solid
              rounded-full cursor-pointer hover:bg-organce hover:border-white hover:text-white"
          ></i>
        </div>
      ) : (
        <div className="flex items-center flex-wrap">
          <p
            onClick={() => dispatch(actions.openModalRegister())}
            className="cursor-pointer mr-3 text-xm py-2 rounded-full hover:bg-organce hover:border-white
              bg-white border-orangce text-gray-700 px-6 font-semibold border-2 border-solid hover:text-gray-100"
          >
            Đăng kí
          </p>
          <p
            onClick={() => dispatch(actions.openModalLogin())}
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
