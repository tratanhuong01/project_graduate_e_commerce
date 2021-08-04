import React, { useState } from "react";

function InfoAdmin(props) {
  //
  const [show, setShow] = useState(false);
  //
  return (
    <div className="w-full p-3">
      <div className="w-full flex relative p-2 border-solid border-gray-300">
        <div className="w-1/4 text-right mr-2">
          <img
            src="../../images/avatar.jpg"
            className="w-12 h-12 rounded-full"
            alt=""
          />
        </div>
        <div className="w-3/4">
          <p className="font-bold">Trà Tấn Hưởng</p>
          <p>Quản trị viên</p>
        </div>
        <i
          onClick={() => setShow(!show)}
          className="fas fa-caret-down absolute top-1/3 right-4 cursor-pointer"
        ></i>
      </div>
      {show && (
        <ul className="w-full p-2">
          <li className="w-full p-1.5 cursor-pointer hover:bg-gray-200 font-semibold">
            Thông tin cá nhân
          </li>
          <li className="w-full p-1.5 cursor-pointer hover:bg-gray-200 font-semibold">
            Chỉnh sửa
          </li>
          <li className="w-full p-1.5 cursor-pointer hover:bg-gray-200 font-semibold">
            Cài đặt
          </li>
        </ul>
      )}
    </div>
  );
}

export default InfoAdmin;
