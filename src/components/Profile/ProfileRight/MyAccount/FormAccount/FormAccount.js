import React from "react";
import { useDispatch } from "react-redux";
import * as profilesAction from "../../../../../actions/profile/index";

function FormAccount(props) {
  //
  const dispatch = useDispatch();
  const { user } = props;
  //
  return (
    <div className="w-full md:w-3/4 flex">
      <div className="w-1/4 flex-col flex ">
        <div className="flex py-3 items-center my-3">Họ và tên</div>
        <div className="flex py-3 items-center">Email</div>
        <div className="flex py-3 items-center">Số điện thoại</div>
        <div className="flex py-3 items-center">Giói tinh</div>
        <div className="flex py-5 items-center">Ngày sinh</div>
      </div>
      <div className="w-3/4">
        <div className="w-full flex items-center my-3">
          <input
            type="text"
            className="w-1/2 mr-5 p-2 border border-solid dark:bg-dark-third dark:border-dark-second 
            border-gray-300"
            placeholder="Nhập họ"
            value={user.firstName}
            onChange={() => ""}
          />
          <input
            type="text"
            className="w-1/2 p-2 mr-2 border border-solid dark:bg-dark-third dark:border-dark-second 
            border-gray-300"
            placeholder="Nhập tên"
            value={user.lastName}
            onChange={() => ""}
          />
        </div>
        <div className="flex py-3 items-center">
          {`${user.email.substring(0, 2)}*********`}@gmail.com{" "}
          <span
            onClick={() => dispatch(profilesAction.loadEmailEdit())}
            className="text-blue-500 cursor-pointer ml-3 font-semibold"
          >
            Chỉnh sửa
          </span>
        </div>
        <div className="flex py-3 items-center">
          {`${user.phone.substring(0, 2)}**********${user.phone.substring(
            7,
            9
          )}`}
          <span
            onClick={() => dispatch(profilesAction.loadPhoneEdit())}
            className="text-blue-500 cursor-pointer ml-3 font-semibold"
          >
            Chỉnh sửa
          </span>
        </div>
        <div className="flex py-3 mt-0.5 items-center">
          <input
            type="radio"
            name="sex"
            className="transform scale-125"
            onChange={() => ""}
            checked={user.sex === "Nam" ? true : false}
          />
          <span className="mx-2 mr-6">Nam</span>
          <input
            type="radio"
            name="sex"
            className="transform scale-125"
            onChange={() => ""}
            checked={user.sex === "Nữ" ? true : false}
          />
          <span className="mx-2 mr-6">Nữ</span>
          <input
            type="radio"
            name="sex"
            className="transform scale-125"
            onChange={() => ""}
            checked={user.sex === "Khác" ? true : false}
          />
          <span className="mx-2 mr-6">Khác</span>
        </div>
        <div className="flex py-3 items-center mt-0.5 text-sm">
          <input
            type="date"
            className="w-auto border-2 border-solid border-gray-300 px-1 py-2 cursor-pointer mr-2 dark:bg-dark-third dark:border-dark-second dark:text-white"
            value={`${user.birthday.split(" ")[0].split("-")[2]}-${
              user.birthday.split(" ")[0].split("-")[0]
            }-${user.birthday.split(" ")[0].split("-")[1]}`}
            onChange={() => ""}
          />
          {/* <div className="w-auto border-2 border-solid border-gray-300 px-1 py-2 cursor-pointer mr-2">
            Ngày 1 <i className="bx bx-chevron-down ml-1"></i>
          </div>
          <div className="w-auto border-2 border-solid border-gray-300 px-1 py-2 cursor-pointer mr-2">
            Tháng 1 <i className="bx bx-chevron-down ml-1"></i>
          </div>
          <div className="w-auto border-2 border-solid border-gray-300 px-1 py-2 cursor-pointer mr-2">
            Năm 2001 <i className="bx bx-chevron-down ml-1"></i>
          </div> */}
        </div>
        <button className="bg-organce px-6 py-2 my-3 text-white font-semibold">
          Lưu
        </button>
      </div>
    </div>
  );
}

export default FormAccount;
