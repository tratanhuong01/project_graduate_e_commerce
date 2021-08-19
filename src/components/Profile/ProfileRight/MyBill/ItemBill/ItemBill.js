import React from "react";
import ItemBillBottom from "./ItemBillBottom/ItemBillBottom";
import ItemBillContent from "./ItemBillContent/ItemBillContent";
import ItemBillTop from "./ItemBillTop/ItemBillTop";

function ItemBill(props) {
  return (
    <div>
      <ItemBillTop />
      <hr className="my-3" />
      <ItemBillContent />
      <hr className="my-3" />
      <ItemBillBottom />
    </div>
  );
}

export default ItemBill;
