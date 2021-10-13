import React from "react";
import ItemBillBottom from "./ItemBillBottom/ItemBillBottom";
import ItemBillContent from "./ItemBillContent/ItemBillContent";
import ItemBillTop from "./ItemBillTop/ItemBillTop";

function ItemBill(props) {
  //
  const { bill, data } = props;
  //
  return (
    <div
      className="w-full bg-gray-50 border-2 border-solid border-gray-200 shadow-lg dark:bg-dark-third 
    p-2 mb-5 dark:border-dark-second"
    >
      <ItemBillTop bill={bill} />
      <hr className="my-3" />
      <ItemBillContent bill={bill} />
      <hr className="my-3" />
      <ItemBillBottom bill={bill} data={data} />
    </div>
  );
}

export default ItemBill;
