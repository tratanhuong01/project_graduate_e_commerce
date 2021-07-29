import React, { useEffect } from "react";
import MainPayment from "../../containers/Payment/MainPayment";
import Second from "../../containers/Second";
import * as actions from "../../actions/index";
import { useDispatch } from "react-redux";

function Payment(props) {
  //
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(actions.closeModal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      <MainPayment />
      <Second />
    </>
  );
}

export default Payment;
