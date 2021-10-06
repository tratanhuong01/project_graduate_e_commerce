import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Config from "../../../../constants/Config";
import * as wishListsAction from "../../../../actions/wishList/index";

function Right(props) {
  //
  const dispatch = useDispatch();
  const { user, wishLists, headers } = useSelector((state) => {
    return {
      wishLists: state.wishLists,
      user: state.user,
      headers: state.headers,
    };
  });
  useEffect(() => {
    //
    dispatch(wishListsAction.loadWishListRequest(user, headers));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  //
  return (
    <li className="flex px-4 py-6  dark:text-gray-300 relative toggel__hover__cart_show cursor-pointer">
      <Link to={Config.PAGE_WISHLIST}>
        <i className="bx bx-heart text-3xl flex items-center "></i>
      </Link>
      <span
        className="w-5 h-5 rounded-full border border-solid text-white
        border-organce flex justify-center items-center font-bold 
        absolute right-2.5 bg-organce bottom-5 text-xs"
      >
        {wishLists.length}
      </span>
    </li>
  );
}

export default Right;
