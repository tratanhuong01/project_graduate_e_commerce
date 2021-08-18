import React from "react";
import ItemCategoryProfile from "./ItemCategoryProfile/ItemCategoryProfile";

function CategoryProfile(props) {
  //
  //
  return (
    <div className="w-full my-8 text-gray-800">
      <ItemCategoryProfile
        label={"Tài khoản của tôi"}
        icon={"bx bx-user"}
        color={"text-blue-500"}
        active={true}
      />
      <ItemCategoryProfile
        label={"Đơn mua"}
        icon={"bx bxl-paypal"}
        color={"text-blue-500"}
      />
      <ItemCategoryProfile
        label={"Thông báo"}
        icon={"bx bx-bell"}
        color={"text-organce"}
      />
    </div>
  );
}

export default CategoryProfile;
