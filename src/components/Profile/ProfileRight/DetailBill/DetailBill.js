import React from "react";
import ItemBillContent from "../MyBill/ItemBill/ItemBillContent/ItemBillContent";
import CostDetailBill from "./CostDetailBill/CostDetailBill";
import DetailBillTop from "./DetailBillTop/DetailBillTop";
import InfoDetailBill from "./InfoDetailBill/InfoDetailBill";
import MethodPayment from "./MethodPayment/MethodPayment";
import StatusDetailBill from "./StatusDetailBill/StatusDetailBill";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import {
  PAGE_PROFILE_USER,
  PROFILE_BILL,
  PROFILE_DETAIL_BILL,
} from "../../../../constants/Config";

function DetailBill(props) {
  return (
    <div className="w-full">
      <BreadcrumbsItem
        to={`${PAGE_PROFILE_USER}/${PROFILE_BILL}/${PROFILE_DETAIL_BILL}`}
      >
        Chi tiết đơn hàng
      </BreadcrumbsItem>
      <DetailBillTop />
      <StatusDetailBill />
      <InfoDetailBill />
      <ItemBillContent cost={true} />
      <CostDetailBill />
      <MethodPayment />
    </div>
  );
}

export default DetailBill;
