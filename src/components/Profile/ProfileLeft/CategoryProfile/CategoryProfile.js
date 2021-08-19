import React from "react";
import { useHistory } from "react-router-dom";
import ItemCategoryProfile from "./ItemCategoryProfile/ItemCategoryProfile";
import * as Config from "../../../../constants/Config";

function CategoryProfile(props) {
  //
  const { match } = props;
  const history = useHistory();
  //
  return (
    <div className="w-full my-8 text-gray-800">
      <ItemCategoryProfile
        onClick={() =>
          history.push(`${Config.PAGE_PROFILE_USER}/${Config.PROFILE_INFO}`)
        }
        label={"Tài khoản của tôi"}
        icon={"bx bx-user"}
        color={"text-blue-500"}
        active={true}
        match={match}
      />
      <ItemCategoryProfile
        onClick={() =>
          history.push(`${Config.PAGE_PROFILE_USER}/${Config.PROFILE_BILL}`)
        }
        label={"Đơn mua"}
        icon={"bx bxl-paypal"}
        color={"text-blue-500"}
        slug={Config.PROFILE_BILL}
        match={match}
      />
      <ItemCategoryProfile
        onClick={() =>
          history.push(`${Config.PAGE_PROFILE_USER}/${Config.PROFILE_NOTIFY}`)
        }
        label={"Thông báo"}
        icon={"bx bx-bell"}
        color={"text-organce"}
        slug={Config.PROFILE_NOTIFY}
        match={match}
      />
    </div>
  );
}

export default CategoryProfile;
