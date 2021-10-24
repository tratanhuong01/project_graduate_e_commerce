import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as profilesAction from "../../../../../../actions/profile/index";

function PhoneEdit({ phone }) {
  //
  const dispatch = useDispatch();
  const [verify, setVerify] = useState("");
  const [password, setPassword] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  //
  return (
    <div className="w-full text-gray-800 dark:text-white">
      <div className="w-full text-gray-800 dark:text-white">
        <p className="text-xl font-semibold">
          {phone ? "Đổi" : "Thêm"} Số Điện Thoại
        </p>
        <p className="text-sm pb-6 ">
          Để đảm bảo tính bảo mật, vui lòng làm theo các bước sau để{" "}
          {phone ? "đổi" : "thêm"} số điện thoại
        </p>
        <hr className="mb-3" />
        <div className="w-full flex text-gray-600 dark:text-white my-5">
          <div className="w-1/4 flex self-center justify-end">
            Số điện Thoại
          </div>
          <div className="w-3/4 ml-6 flex flex-wrap">
            {phone ? (
              <>
                <span className="">{phone}</span>
                <span className="ml-3 text-blue-500 font-semibold cursor-pointer">
                  Gửi mã
                </span>
              </>
            ) : (
              <>
                <input
                  type="text"
                  onChange={(event) => setNumberPhone(event.target.value)}
                  className="w-3/4 lg:w-1/2 p-2 border border-solid border-gray-300 dark:border-dark-third 
                  dark:bg-dark-third"
                  placeholder={`Số điện thoại`}
                  value={numberPhone}
                />
                <span className="ml-3 text-blue-500 font-semibold cursor-pointer self-center">
                  Gửi mã
                </span>
              </>
            )}
          </div>
        </div>
        <div className="w-full flex text-gray-600 dark:text-white my-5">
          <div className="w-1/4 flex pt-3 justify-end">
            {phone && verify ? "Số điện thoại mới" : "Mã xác nhận"}
          </div>
          <div className="w-3/4 ml-6 flex flex-wrap items-center">
            <input
              type="text"
              onChange={(event) => setPassword(event.target.value)}
              className="w-3/4 lg:w-1/2 p-2 border border-solid border-gray-300 dark:border-dark-third 
              dark:bg-dark-third"
              placeholder={
                phone && verify
                  ? "Nhập số điện thoại mới..."
                  : "Nhập mã xác nhận...."
              }
              value={password}
              disabled={verify ? false : true}
            />
          </div>
        </div>
        <div className="w-full flex my-5 pl-6">
          <div className="w-1/4"></div>
          <div className="flex">
            <button
              disabled={verify ? false : true}
              onClick={async () => {
                if (verify === "123") setVerify(false);
              }}
              className={`${
                verify ? "bg-organce" : "bg-gray-700 cursor-not-allowed"
              } px-6 py-2 my-3 text-white font-semibold`}
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
