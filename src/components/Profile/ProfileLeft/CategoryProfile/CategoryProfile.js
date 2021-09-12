import React from "react";
import { useHistory } from "react-router-dom";
import ItemCategoryProfile from "./ItemCategoryProfile/ItemCategoryProfile";
import * as Config from "../../../../constants/Config";

function CategoryProfile(props) {
  //
  const { slug } = props;
  const history = useHistory();
  //
  return (
    <div className="w-full flex md:block mb-3 md:my-8 text-gray-800 dark:text-white">
      <ItemCategoryProfile
        onClick={() =>
          history.push(`${Config.PAGE_PROFILE_USER}/${Config.PROFILE_INFO}`)
        }
        label={"Tài khoản của tôi"}
        icon={"bx bx-user"}
        color={"text-blue-500"}
        active={true}
        match={slug}
      />
      <ItemCategoryProfile
        onClick={() =>
          history.push(`${Config.PAGE_PROFILE_USER}/${Config.PROFILE_BILL}`)
        }
        label={"Đơn mua"}
        icon={"bx bxl-paypal"}
        color={"text-blue-500"}
        slug={Config.PROFILE_BILL}
        match={slug}
      />
      <ItemCategoryProfile
        onClick={() =>
          history.push(`${Config.PAGE_PROFILE_USER}/${Config.PROFILE_VOUCHER}`)
        }
        label={"Voucher"}
        icon={"bx bx-spreadsheet"}
        color={"text-indigo-500"}
        slug={Config.PROFILE_VOUCHER}
        match={slug}
      />
      <ItemCategoryProfile
        onClick={() =>
          history.push(`${Config.PAGE_PROFILE_USER}/${Config.PROFILE_NOTIFY}`)
        }
        label={"Thông báo"}
        icon={"bx bx-bell"}
        color={"text-organce"}
        slug={Config.PROFILE_NOTIFY}
        match={slug}
      />
    </div>
  );
}

export default CategoryProfile;
