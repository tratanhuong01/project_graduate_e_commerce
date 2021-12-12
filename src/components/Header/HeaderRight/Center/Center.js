import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Config from "../../../../constants/Config";
import ModalCartAdded from "../../../General/ModalCartAdded/ModalCartAdded";

function Center(props) {
  //
  const carts = useSelector((state) => state.carts);
  //
  return (
    <li className="py-6 px-2 flex dark:text-gray-300 relative cursor-pointer toggel__hover__cart_show">
      <Link to={Config.PAGE_CART}>
        <i className="bx bx-shopping-bag text-3xl flex items-center cursor-pointer"></i>
      </Link>
      <span
        className="w-5 h-5 rounded-full border border-solid text-white
            border-organce flex justify-center items-center font-bold 
            absolute right-0.5 bg-organce bottom-5 text-xs"
      >
        {carts.list ? (() => {
          let amount = 0;
          carts.list.forEach(cart => {
            amount += cart.amount;
          });
          return amount >= 10 ? `9+` : amount;
        })() : 0}
      </span>
      <ModalCartAdded carts={carts} />
    </li>
  );
}

export default Center;
