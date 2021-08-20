import React from "react";
import { useDispatch } from "react-redux";
import * as profilesAction from "../../../../../actions/profile/index";

function DetailBillTop(props) {
  //
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full flex items-center">
      <div className="w-1/3 py-2 mb-3 cursor-pointer text-gray-600 flex items-center ">
        <div
          onClick={() => dispatch(profilesAction.returnProfile())}
          className="flex items-center"
        >
          <span className="bx bx-left-arrow-alt mr-2 text-xl"></span>
          <span className="text-xl">TRỞ LẠI</span>
        </div>
      </div>
      <div className="w-2/3 flex justify-end items-center ">
        <span className="mr-3 font-semibold text-gray-600">
          ID ĐƠN HÀNG. 210605H8PS6G3D
        </span>
        |
        <span className="ml-3 font-semibold text-organce">
          ĐƠN HÀNG ĐÃ GIAO
        </span>
      </div>
    </div>
  );
}

export default DetailBillTop;
