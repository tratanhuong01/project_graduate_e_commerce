import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MainPayment from "../../containers/Payment/MainPayment";
import useResetPage from "../../hook/useResetPage";
import Modal from "../../containers/Modal";
import { Redirect } from "react-router-dom";

function Payment(props) {
  //
  const { user, orders } = useSelector((state) => {
    return {
      user: state.user,
      orders: state.orders,
    };
  });
  useEffect(() => {
    window.onbeforeunload = (event) => {
      const e = event || window.event;
      // Cancel the event
      e.preventDefault();
      if (e) {
        e.returnValue = ""; // Legacy method for cross browser support
      }
      return ""; // Legacy method for cross browser support
    };
  }, []);
  useResetPage("Thanh toán");
  //
  return user && orders.list.length > 0 ? (
    <div className="w-full dark:bg-dark-second">
      <MainPayment />
      <Modal />
    </div>
  ) : (
    <Redirect to=""></Redirect>
  );
}

export default Payment;
