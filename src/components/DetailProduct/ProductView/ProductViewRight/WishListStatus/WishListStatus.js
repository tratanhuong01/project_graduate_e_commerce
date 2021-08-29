import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as wishListsAction from "../../../../../actions/wishList/index";

function WishListStatus(props) {
  //
  const { user, idProduct } = props;
  const dispatch = useDispatch();
  const wishLists = useSelector((state) => state.wishLists);
  const index = wishLists.findIndex(
    (wishList) => wishList.idProduct === idProduct
  );
  useEffect(() => {}, [wishLists]);
  //
  return (
    <div
      onClick={() =>
        dispatch(
          wishListsAction.addWishListRequest({
            user: user,
            idProduct: idProduct,
          })
        )
      }
      className="w-14 h-14 rounded-full bg-gray-100 flex items-center 
    justify-center absolute top-10 right-1 cursor-pointer"
    >
      <span
        className={`${
          index !== -1 ? "bx bxs-heart" : "bx bx-heart"
        } text-3xl text-red-500 flex`}
      ></span>
    </div>
  );
}

export default WishListStatus;