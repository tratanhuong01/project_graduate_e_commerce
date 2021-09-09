import React from "react";
import InputSearchBill from "./InputSearchBill/InputSearchBill";
import ItemBill from "./ItemBill/ItemBill";
import StatusBill from "./StatusBill/StatusBill";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { PAGE_PROFILE_USER, PROFILE_BILL } from "../../../../constants/Config";
function MyBill(props) {
  return (
    <div className="w-full dark:text-white">
      <BreadcrumbsItem to={`${PAGE_PROFILE_USER}/${PROFILE_BILL}`}>
        Đơn hàng
      </BreadcrumbsItem>
      <StatusBill />
      <InputSearchBill />
      <ItemBill />
    </div>
  );
}

export default MyBill;
