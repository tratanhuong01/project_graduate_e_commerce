import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cartsAction from "../actions/cart/index";
export default function useCart() {
  const states = useSelector((state) => {
    return {
      user: state.user,
      carts: state.carts,
    };
  });
  const dispatch = useDispatch();
  const { user, carts } = states;
  useEffect(() => {
    //
    dispatch(cartsAction.loadCartRequest(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return carts;
}
