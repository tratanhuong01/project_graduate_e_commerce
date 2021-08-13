import React from "react";
import { useSelector } from "react-redux";

function CategoryIndexLeftTop(props) {
  //
  const states = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const { user } = states;
  const { setMenu, menu } = props;
  //
  return (
    <>
      <li className="p-2 flex">
        {user !== null ? (
          <div className="flex items-center">
            <img
              src="/images/avatar.jpg"
              className="w-8 h-8 rounded-full mr-3"
              alt=""
            />
            <span className="font-semibold text-xm mr-1">{`${user.firstName} ${user.lastName}`}</span>
            <i className="bx bxs-chevron-down"></i>
            <i
              className="bx bx-exit text-2xl bg-white ml-3 text-black p-1.5 border-2 border-solid
              rounded-full cursor-pointer hover:bg-organce hover:border-white hover:text-white"
            ></i>
          </div>
        ) : (
          <div className="flex items-center flex-wrap">
            <p
              className="cursor-pointer mr-3 text-xm py-2 rounded-full hover:bg-organce hover:border-white
              bg-white border-orangce text-gray-700 px-6 font-semibold border-2 border-solid hover:text-gray-100"
            >
              Đăng kí
            </p>
            <p
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
