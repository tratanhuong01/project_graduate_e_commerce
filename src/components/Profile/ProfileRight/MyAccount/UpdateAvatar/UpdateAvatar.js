import React from "react";

function UpdateAvatar(props) {
  //
  const { user } = props;
  //
  return (
    <div
      className="w-full md:w-1/4 mb-6 md:mb-0 flex items-center justify-center border-l-2 border-solid 
      border-gray-100"
    >
      <div className="flex items-center flex-col">
        <input type="file" className="hidden" id="fileUpdateAvatar" />

        <label htmlFor="fileUpdateAvatar">
          <img
            src={user.avatar}
            alt=""
            className="w-24 h-24 rounded-full object-cover"
          />
          <div
            className="px-4 py-1.5 border-2 border-solid border-gray-300 text-gray-800 
            font-semibold my-4"
          >
            Chọn ảnh
          </div>
        </label>

        <p className="heading-1 text-sm text-center">
          Dụng lượng file tối đa 1 MB
          <br /> Định dạng:.JPEG, .PNG
        </p>
      </div>
    </div>
  );
}

export default UpdateAvatar;
