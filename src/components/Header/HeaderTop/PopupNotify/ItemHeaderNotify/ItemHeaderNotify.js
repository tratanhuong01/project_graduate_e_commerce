import React, { useState } from "react";
import PopupNotify from "../PopupNotify";

function ItemHeaderNotify(props) {
  //
  const [amount, setAmount] = useState(0);
  //
  return (
    <li className="flex items-center relative notify__cursor">
      <div className="bx bx-bell ml-1 mr-2 text-2xl relative">
        <span className="w-4 h-4 rounded-full flex bg-organce text-white absolute -top-1 -right-1 justify-center items-center">
          {amount}
        </span>
      </div>
      <span className="mr-4 hover:text-organce cursor-pointer">Thông báo</span>
      <PopupNotify amount={amount} setAmount={setAmount} />
    </li>
  );
}

export default ItemHeaderNotify;
