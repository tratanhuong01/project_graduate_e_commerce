import React from "react";
import InputSearchBill from "./InputSearchBill/InputSearchBill";
import ItemBill from "./ItemBill/ItemBill";
import StatusBill from "./StatusBill/StatusBill";

function MyBill(props) {
  return (
    <div className="w-full">
      <StatusBill />
      <InputSearchBill />
      <ItemBill />
    </div>
  );
}

export default MyBill;
