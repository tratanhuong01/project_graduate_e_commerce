import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import MainPayment from "../../containers/Payment/MainPayment";
import Modal from "../../containers/Modal";
import Loading from "../../components/General/Loading/Loading";
import * as cartsAction from "../../actions/cart/index";
import * as ordersAction from "../../actions/order/index";

function Payment(props) {
  //
  const dispatch = useDispatch();
  const states = useSelector((state) => {
    return {
      orders: state.orders,
      user: state.user,
      carts: state.carts,
    };
  });
  const { orders, user, carts } = states;

  useEffect(() => {
    //
    dispatch(cartsAction.loadCartRequest(user));
    dispatch(modalsAction.closeModal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    //
    dispatch(ordersAction.loadOrder(carts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carts]);
  //
  return orders !== null ? (
    <>
      <MainPayment />
      <Modal />
    </>
  ) : (
    <Loading />
  );
}

export default Payment;
