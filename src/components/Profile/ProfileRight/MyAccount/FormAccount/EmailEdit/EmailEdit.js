import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as profilesAction from "../../../../../../actions/profile/index";

function EmailEdit(props) {
  //
  const dispatch = useDispatch();
  const [isCorrect, setIsCorrect] = useState(false);
  const [password, setPassword] = useState("");
  //
  return (
    <div className="w-full text-gray-800 dark:text-white">
      <p className="text-xl font-semibold">Đổi email</p>
      <p className="text-sm pb-6 ">
        Để cập nhật email mới, vui lòng xác nhận bằng cách nhập mật khẩu
      </p>
      <hr className="mb-3" />
      <div className="w-full flex text-gray-600 dark:text-white">
        <div className="w-1/4 flex-col flex items-end">
          <div className="flex my-2.5 py-3 items-center">Email</div>
          <div className="flex my-6 items-center">
            {isCorrect ? "Email mới" : "Mật khẩu"}
          </div>
        </div>
        <div className="w-3/4 ml-6">
          <div className="flex py-6 items-center">
            {isCorrect ? "tratanhuong01@gmail.com" : "tr******@gmail.com"}
          </div>
          <div className="flex py-3 items-center">
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              className="w-1/2 p-2 border border-solid border-gray-300 dark:border-dark-third 
              dark:bg-dark-third"
              placeholder={
                isCorrect ? "Nhập email mới..." : "Nhập mật khẩu...."
              }
              value={password}
            />
          </div>
          <div className="flex">
            <button
              onClick={() => {
                setIsCorrect(!isCorrect);
                setPassword("");
              }}
              className="bg-organce px-6 py-2 my-3 text-white font-semibold"
            >
              Xác nhận
            </button>
            <button
              onClick={() => dispatch(profilesAction.returnProfile())}
              className="bg-white  px-6 py-2 my-3 text-gray-600  font-semibold border-2 border-solid 
              border-gray-300 ml-5"
            >
              Trở về
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailEdit;
