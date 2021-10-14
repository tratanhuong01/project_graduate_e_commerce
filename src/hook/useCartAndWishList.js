import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cartsAction from "../actions/cart/index";
import * as wishListsAction from "../actions/wishList/index";

export default function useCartAndWishList() {
  const { user, headers } = useSelector((state) => {
    return {
      user: state.user,
      headers: state.headers,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(wishListsAction.loadWishListRequest(user, headers));
    dispatch(cartsAction.loadCartRequest(user, headers));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
}
