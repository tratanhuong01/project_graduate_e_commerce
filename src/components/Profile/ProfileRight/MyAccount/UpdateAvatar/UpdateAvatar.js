import React from "react";

function UpdateAvatar(props) {
  return (
    <div
      className="w-1/4 flex items-center justify-center border-l-2 border-solid 
    border-gray-100"
    >
      <div className="flex items-center flex-col">
        <img
          src="https://cf.shopee.vn/file/e4e139c5df5bff16e526b4fe1c31e7e8_tn"
          alt=""
          className="w-24 h-24 rounded-full"
        />
        <button
          className="px-4 py-1.5 border-2 border-solid border-gray-300 text-gray-800 
        font-semibold my-4"
        >
          Chọn ảnh
        </button>
        <p className="heading-1 text-sm">
          Dụng lượng file tối đa 1 MB
          <br /> Định dạng:.JPEG, .PNG
        </p>
      </div>
    </div>
  );
}

export default UpdateAvatar;
