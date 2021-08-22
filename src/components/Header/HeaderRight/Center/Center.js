import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Config from "../../../../constants/Config";
import ModalCartAdded from "../../../General/ModalCartAdded/ModalCartAdded";

function Center(props) {
  //
  const states = useSelector((state) => {
    return {
      carts: state.carts,
      user: state.user,
    };
  });
  const { carts, user } = states;

  useEffect(() => {}, [user, carts]);

  //
  return (
    <li className="py-6 px-2 flex dark:text-gray-300 relative cursor-pointer toggel__hover__cart_show cursor-pointer">
      <Link to={Config.PAGE_CART}>
        <i className="bx bx-shopping-bag text-3xl flex items-center cursor-pointer"></i>
      </Link>
      <span
        className="w-5 h-5 rounded-full border border-solid text-white
            border-organce flex justify-center items-center font-bold 
            absolute right-0.5 bg-organce bottom-5 text-xs"
      >
        {carts.length}
      </span>
      <ModalCartAdded carts={carts} user={user} />
    </li>
  );
}

export default Center;
