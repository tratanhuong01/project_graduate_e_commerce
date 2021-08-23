import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cartsAction from "../actions/cart/index";
import * as wishListsAction from "../actions/wishList/index";

export default function useCart() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(wishListsAction.loadWishListRequest(user));
    dispatch(cartsAction.loadCartRequest(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
