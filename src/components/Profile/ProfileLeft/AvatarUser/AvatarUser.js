import React from "react";

function AvatarUser(props) {
  return (
    <div className="w-full relative flex items-center ">
      <img
        src="https://cf.shopee.vn/file/e4e139c5df5bff16e526b4fe1c31e7e8_tn"
        alt=""
        className="w-16 h-16 rounded-full object-cover 
        border-solid border-white border-4"
      />
      <div className="my-2 flex-col flex ml-5 font-semibold">
        <span className="mb-1 text-xm">Trà Hưởng</span>
        <span className="text-sm text-gray-600">
          <i className="bx bxs-edit-alt mr-2"></i>Chỉnh sửa
        </span>
      </div>
      {/* <div
        className="w-5 h-5 absolute rounded-full flex justify-center items-center 
        bottom-1 right-0 bg-gray-800"
      >
        <span class="bx bxs-camera text-sm text-white"></span>
      </div> */}
    </div>
  );
}

export default AvatarUser;
