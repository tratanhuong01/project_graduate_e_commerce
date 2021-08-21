import React, { useEffect } from "react";
import MainCart from "../../containers/Cart/MainCart";
import Modal from "../../containers/Modal";

function Cart(props) {
  //
  useEffect(() => {
    //
    document.title = "Giỏ hàng";
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
