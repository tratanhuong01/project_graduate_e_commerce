import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import MainCart from "../../containers/Cart/MainCart";
import Modal from "../../containers/Modal";
import * as cartsAction from "../../actions/cart/index";
import ScrollTop from "../../components/General/ScrollTop/ScrollTop";
import useScrollEvent from "../../hook/useScrollEvent";

function Cart(props) {
  //
  const dispatch = useDispatch();
  const { show, subClassMenu } = useScrollEvent();
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
      {show && <ScrollTop />}
      <MainCart subClassMenu={subClassMenu} />
      <Modal />
    </>
  );
}

export default Cart;
