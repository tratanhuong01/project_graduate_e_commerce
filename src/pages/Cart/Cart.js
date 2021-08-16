import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import MainCart from "../../containers/Cart/MainCart";
import Modal from "../../containers/Modal";
import * as cartsAction from "../../actions/cart/index";

function Cart(props) {
  //
  const dispatch = useDispatch();
  const states = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const { user } = states;
  useEffect(() => {
    //
    document.title = "Giỏ hàng";

    dispatch(modalsAction.closeModal());
    dispatch(cartsAction.loadCartRequest(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      <MainCart />
      <Modal />
    </>
  );
}

export default Cart;
