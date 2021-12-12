import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Config from "../../../../constants/Config";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function AvatarUser(props) {
  //
  const user = useSelector((state) => state.user);
  //
  return (
    <div className="w-full relative items-center hidden md:flex">
      <Zoom>
        <img
          src={user.avatar}
          alt=""
          className="w-16 h-16 rounded-full object-cover 
        border-solid border-white border-4"
        />
      </Zoom>
      <div className="my-2 flex-col flex ml-5 font-semibold">
        <span className="mb-1 text-xm">{`${user.firstName} ${user.lastName}`}</span>
        <Link
          to={`${Config.PAGE_PROFILE_USER}/${Config.PROFILE_INFO}`}
          className="text-sm text-gray-600 dark:text-gray-300"
        >
          <i className="bx bxs-edit-alt mr-2"></i>Chỉnh sửa
        </Link>
      </div>
    </div>
  );
}

export default AvatarUser;
