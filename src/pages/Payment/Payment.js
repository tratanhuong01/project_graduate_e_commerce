import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import MainPayment from "../../containers/Payment/MainPayment";
import Modal from "../../containers/Modal";

function Payment(props) {
  //
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(modalsAction.closeModal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      <MainPayment />
      <Modal />
    </>
  );
}

export default Payment;
