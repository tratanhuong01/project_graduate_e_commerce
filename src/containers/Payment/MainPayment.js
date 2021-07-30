import React from "react";
import PaymentLeft from "./PaymentLeft";
import PaymentRight from "./PaymentRight";

function MainPayment(props) {
  return (
    <div className="px-4 w-full xl:w-11/12 flex flex-col-reverse xl:flex-row mx-auto">
      <PaymentLeft />
      <PaymentRight />
    </div>
  );
}

export default MainPayment;
