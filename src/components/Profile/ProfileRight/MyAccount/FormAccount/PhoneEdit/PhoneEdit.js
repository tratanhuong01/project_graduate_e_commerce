import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as profilesAction from "../../../../../../actions/profile/index";

function PhoneEdit(props) {
  //
  const dispatch = useDispatch();
  const [isCorrect, setIsCorrect] = useState(false);
  const [password, setPassword] = useState("");
  //
  return (
    <div className="w-full text-gray-800">
      <p className="text-xl font-semibold">Đổi Số Điện Thoại</p>
      <p className="text-sm pb-6 ">
        Để đảm bảo tính bảo mật, vui lòng làm theo các bước sau để đổi số điện
        thoại
      </p>
      <hr className="mb-3" />
      <div className="w-full flex text-gray-600">
        <div className="w-1/4 flex-col flex items-end">
          <div className="flex my-2.5 py-3 items-center">Số điện thoại</div>
          <div className="flex my-6 items-center">
            {isCorrect ? "Số điện thoại mới" : "Mật khẩu"}
          </div>
        </div>
        <div className="w-3/4 ml-6">
          <div className="flex py-6 items-center">
            {isCorrect ? "0354114665" : "03******5"}
          </div>
          <div className="flex py-3 items-center">
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              className="w-1/2 p-2 border border-solid border-gray-300"
              placeholder={
                isCorrect ? "Nhập số điện thoại mới..." : "Nhập mật khẩu...."
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

export default PhoneEdit;
