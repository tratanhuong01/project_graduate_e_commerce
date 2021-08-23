import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainPayment from "../../containers/Payment/MainPayment";
import Loading from "../../components/General/Loading/Loading";
import * as ordersAction from "../../actions/order/index";
import useResetPage from "../../hook/useResetPage";
import Modal from "../../containers/Modal";
import { Redirect } from "react-router-dom";

function Payment(props) {
  //
  const dispatch = useDispatch();
  const states = useSelector((state) => {
    return {
      user: state.user,
      orders: state.orders,
    };
  });
  const { orders, user } = states;

  useEffect(() => {
    //
    dispatch(ordersAction.loadOrder([]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useResetPage("Thanh toán");
  //
  return user ? (
    orders !== null ? (
      <div className="w-full dark:bg-dark-second">
        <MainPayment />
        <Modal />
      </div>
    ) : (
      <Loading />
    )
  ) : (
    <Redirect to=""></Redirect>
  );
}

export default Payment;
