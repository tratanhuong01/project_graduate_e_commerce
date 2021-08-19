import React from "react";
import { useDispatch } from "react-redux";
import * as profilesAction from "../../../../../actions/profile/index";

function FormAccount(props) {
  //
  const dispatch = useDispatch();
  //
  return (
    <div className="w-3/4 flex">
      <div className="w-1/4 flex-col flex ">
        <div className="flex py-3 items-center">Tên đăng nhập</div>
        <div className="flex py-3 items-center my-3">Họ tên</div>
        <div className="flex py-3 items-center">Email</div>
        <div className="flex py-3 items-center">Số điện thoại</div>
        <div className="flex py-3 items-center">Giói tinh</div>
        <div className="flex py-5 items-center">Ngày sinh</div>
      </div>
      <div className="w-3/4">
        <div className="flex py-3 items-center">tratanhuong01</div>
        <div className="flex items-center my-3">
          <input
            type="text"
            className="w-11/12 p-2 border border-solid 
            border-gray-300"
            placeholder=""
          />
        </div>
        <div className="flex py-3 items-center">
          tr******@gmail.com{" "}
          <span
            onClick={() => dispatch(profilesAction.loadEmailEdit())}
            className="text-blue-500 cursor-pointer ml-3 font-semibold"
          >
            Chỉnh sửa
          </span>
        </div>
        <div className="flex py-3 items-center">
          035******5{" "}
          <span
            onClick={() => dispatch(profilesAction.loadPhoneEdit())}
            className="text-blue-500 cursor-pointer ml-3 font-semibold"
          >
            Chỉnh sửa
          </span>
        </div>
        <div className="flex py-3 mt-0.5 items-center">
          <input type="radio" name="sex" className="transform scale-125" />
          <span className="mx-2 mr-6">Nam</span>
          <input type="radio" name="sex" className="transform scale-125" />
          <span className="mx-2 mr-6">Nữ</span>
          <input type="radio" name="sex" className="transform scale-125" />
          <span className="mx-2 mr-6">Khác</span>
        </div>
        <div className="flex py-3 items-center mt-0.5">
          <div className="w-32 border-2 border-solid border-gray-300 p-2 cursor-pointer mr-4">
            Ngày 1 <i className="bx bx-chevron-down ml-3"></i>
          </div>
          <div className="w-32 border-2 border-solid border-gray-300 p-2 cursor-pointer mr-4">
            Tháng 1 <i className="bx bx-chevron-down ml-3"></i>
          </div>
          <div className="w-32 border-2 border-solid border-gray-300 p-2 cursor-pointer mr-4">
            Năm 2001 <i className="bx bx-chevron-down ml-3"></i>
          </div>
        </div>
        <button className="bg-organce px-6 py-2 my-3 text-white font-semibold">
          Lưu
        </button>
      </div>
    </div>
  );
}

export default FormAccount;
