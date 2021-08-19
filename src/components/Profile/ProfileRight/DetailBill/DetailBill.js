import React from "react";
import ItemBillContent from "../MyBill/ItemBill/ItemBillContent/ItemBillContent";
import CostDetailBill from "./CostDetailBill/CostDetailBill";
import DetailBillTop from "./DetailBillTop/DetailBillTop";
import InfoDetailBill from "./InfoDetailBill/InfoDetailBill";
import MethodPayment from "./MethodPayment/MethodPayment";
import StatusDetailBill from "./StatusDetailBill/StatusDetailBill";

function DetailBill(props) {
  return (
    <div className="w-full">
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
