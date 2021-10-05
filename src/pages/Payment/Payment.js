import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MainPayment from "../../containers/Payment/MainPayment";
import useResetPage from "../../hook/useResetPage";
import Modal from "../../containers/Modal";
import { Redirect } from "react-router-dom";
import { PAGE_CART } from "../../constants/Config";

function Payment(props) {
  //
  const orders = useSelector((state) => state.orders);
  useEffect(() => {
    // window.onbeforeunload = (event) => {
    //   const e = event || window.event;
    //   // Cancel the event
    //   e.preventDefault();
    //   if (e) {
    //     e.returnValue = ""; // Legacy method for cross browser support
    //   }
    //   return ""; // Legacy method for cross browser support
    // };
  }, []);
  useResetPage("Thanh toán");
  //
  return orders.list.length > 0 ? (
    <div className="w-full dark:bg-dark-second">
      <MainPayment />
      <Modal />
    </div>
  ) : (
    <Redirect to={PAGE_CART}></Redirect>
  );
}

export default Payment;
