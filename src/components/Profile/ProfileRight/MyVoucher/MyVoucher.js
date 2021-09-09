import React from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import {} from "../../../../../constants/Config";
import { PAGE_PROFILE_USER } from "../../../../constants/Config";

function MyVoucher(props) {
  return (
    <div>
      <BreadcrumbsItem to={`${PAGE_PROFILE_USER}/voucher`}>
        Voucher
      </BreadcrumbsItem>
    </div>
  );
}

export default MyVoucher;
