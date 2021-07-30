import React from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../../actions/modal/index";

function HeaderLeftNormal(props) {
  //
  const dispatch = useDispatch();
  //
  return (
    <div className="w-1/3 pl-5 flex">
      <p className="flex items-center cursor-pointer">
        <i className="bx bxs-category text-4xl mr-4"></i>
        <span
          onClick={() => dispatch(modalsAction.openCategory())}
          className="text-xl font-semibold hidden md:block"
        >
          Danh mục
        </span>
      </p>
    </div>
  );
}

export default HeaderLeftNormal;
