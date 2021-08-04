import React from "react";
import ItemNewBill from "./ItemNewBill/ItemNewBill";

function NewBill(props) {
  return (
    <div className="w-1/3 p-1 bg-white mr-2">
      <p class="font-bold text-xm font-bold my-2 pl-3">Đơn hàng gần đây</p>
      <ul class="w-full flex flex-wrap">
        <ItemNewBill />
        <ItemNewBill />
        <ItemNewBill />
      </ul>
    </div>
  );
}

export default NewBill;
