import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainPayment from "../../containers/Payment/MainPayment";
import Loading from "../../components/General/Loading/Loading";
import * as ordersAction from "../../actions/order/index";

function Payment(props) {
  //
  const dispatch = useDispatch();
  const states = useSelector((state) => {
    return {
      orders: state.orders,
    };
  });
  const { orders } = states;

  useEffect(() => {
    //
    document.title = "Thanh toán";
    dispatch(ordersAction.loadOrder([]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return orders !== null ? (
    <div className="w-full dark:bg-dark-second">
      <MainPayment />
    </div>
  ) : (
    <Loading />
  );
}

export default Payment;
