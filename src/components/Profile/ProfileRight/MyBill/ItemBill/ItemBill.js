import React from "react";
import ItemBillBottom from "./ItemBillBottom/ItemBillBottom";
import ItemBillContent from "./ItemBillContent/ItemBillContent";
import ItemBillTop from "./ItemBillTop/ItemBillTop";

function ItemBill(props) {
  //
  const { bill } = props;
  //
  return (
    <>
      <ItemBillTop bill={bill} />
      <hr className="my-3" />
      <ItemBillContent bill={bill} />
      <hr className="my-3" />
      <ItemBillBottom bill={bill} />
    </>
  );
}

export default ItemBill;
