import React from "react";

function ChildCategoryProfile(props) {
  return (
    <div className="w-full pl-9">
      <div className="w-full my-2 py-2 flex items-center">
        <span className="font-semibold text-organce cursor-pointer">Hồ sơ</span>
      </div>
      <div className="w-full my-2 py-2 flex items-center">
        <span className="font-semibold hover:text-organce cursor-pointer">
          Ngân hàng
        </span>
      </div>
      <div className="w-full my-2 py-2 flex items-center">
        <span className="font-semibold hover:text-organce cursor-pointer">
          Địa chỉ
        </span>
      </div>
      <div className="w-full my-2 py-2 flex items-center">
        <span className="font-semibold hover:text-organce cursor-pointer">
          Đổi mật khẩu
        </span>
      </div>
    </div>
  );
}

export default ChildCategoryProfile;
