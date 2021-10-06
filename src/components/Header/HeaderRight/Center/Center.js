import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Config from "../../../../constants/Config";
import ModalCartAdded from "../../../General/ModalCartAdded/ModalCartAdded";
import * as cartsAction from "../../../../actions/cart/index";

function Center(props) {
  //
  const dispatch = useDispatch();
  const { user, carts, headers } = useSelector((state) => {
    return {
      carts: state.carts,
      user: state.user,
      headers: state.headers,
    };
  });

  useEffect(() => {
    //
    dispatch(cartsAction.loadCartRequest(user, headers));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
        {carts.list.length}
      </span>
      <ModalCartAdded carts={carts} user={user} />
    </li>
  );
}

export default Center;
