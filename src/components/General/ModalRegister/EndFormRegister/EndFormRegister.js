import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../../actions/index";

function EndFormRegister(props) {
  //
  const dispatch = useDispatch();
  //
  return (
    <>
      <div className="w-full flex justify-center my-5">
        <button
          type="submit"
          className="bg-organce p-3 text-white rounded-full w-1/2 hover:border-organce
          font-bold hover:bg-white hover:text-black border-2 border-solid border-white"
        >
          Đăng kí
        </button>
      </div>
      <div className="w-full mb-5 text-xm font-semibold flex justify-center">
        <span
          onClick={() => dispatch(actions.openModalLogin())}
          className="text-xm text-blue-500 cursor-pointer"
        >
          Đăng nhập
        </span>
      </div>
    </>
  );
}

export default EndFormRegister;
