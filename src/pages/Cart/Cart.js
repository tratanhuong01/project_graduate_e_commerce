import React from "react";
import MainCart from "../../containers/Cart/MainCart";
import Modal from "../../containers/Modal";
import useResetPage from "../../hook/useResetPage";

function Cart(props) {
  //
  useResetPage("Giỏ hàng");
  //
  return (
    <>
      <MainCart />
      <Modal />
    </>
  );
}

export default Cart;
