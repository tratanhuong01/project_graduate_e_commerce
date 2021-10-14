import React, { useEffect, useState } from "react";
import api from "../../../../../Utils/api";
import * as usersAction from "../../../../../actions/user/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function UpdateAvatar(props) {
  //
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { user, headers } = useSelector((state) => {
    return {
      user: state.user,
      headers: state.headers,
    };
  });
  useEffect(() => {}, [user]);
  const onChangeUploadFile = async (event) => {
    if (event.target.files.length > 0) {
      let clone = { ...user };
      setLoading(true);
      let formData = new FormData();
      formData.append("multipartFile", event.target.files[0]);
      formData.append("id", user.id);
      formData.append("publicId", "E-Commerce/AvatarUser/");
      const result = await api(
        "updateImageSingle",
        "POST",
        formData,
        Object.assign(headers, {
          "Content-Type": "multipart/form-data",
        })
      );
      clone.avatar = result.data.url;
      await api(
        `users`,
        "PUT",
        clone,
        Object.assign(headers, {
          "Content-Type": "application/json",
        })
      );
      dispatch(usersAction.loadUserRequest(headers));
      setLoading(false);
    }
  };
  //
  return (
    <div
      className="w-full md:w-1/4 mb-6 md:mb-0 flex items-center justify-center border-l-2 border-solid 
      border-gray-100"
    >
      <div className="flex items-center flex-col">
        <input
          type="file"
          onChange={onChangeUploadFile}
          className="hidden"
          id="fileUpdateAvatar"
        />
        {loading ? (
          <div className="w-24 h-24 flex items-center justify-center">
            <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
          </div>
        ) : (
          <label htmlFor="fileUpdateAvatar">
            <img
              src={user.avatar}
              alt=""
              className="w-24 h-24 rounded-full object-cover"
            />
            <div
              className="px-4 py-1.5 border-2 border-solid border-gray-300 text-gray-800 
            font-semibold my-4 dark:text-white"
            >
              Chọn ảnh
            </div>
          </label>
        )}
        <p className="heading-1 text-sm text-center">
          Dụng lượng file tối đa 1 MB
          <br /> Định dạng:.JPEG, .PNG
        </p>
      </div>
    </div>
  );
}

export default UpdateAvatar;
