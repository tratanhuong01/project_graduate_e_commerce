import React from "react";
import NumberProduct from "../../components/Payment/PaymentRight/NumberProduct/NumberProduct";
import ItemProductPayment from "../../components/Payment/PaymentRight/ItemProductPayment/ItemProductPayment";
import ApplyCode from "../../components/Payment/PaymentRight/ApplyCode/ApplyCode";
import EndPayment from "../../components/Payment/PaymentRight/EndPayment/EndPayment";

function PaymentRight(props) {
  //
  //
  return (
    <div className="w-full xl:w-1/3 xl:h-screen overflow-auto py-3 px-4">
      <div className="w-full">
        <NumberProduct />
        <div className="w-full my-5 hidden xl:block">
          <ItemProductPayment />
          <ItemProductPayment />
          <ItemProductPayment />
        </div>
        <hr className="my-3 hidden xl:block"></hr>
        <ApplyCode />
        <hr className="my-3"></hr>
        <EndPayment sumMoney={""} />
      </div>
    </div>
  );
}

export default PaymentRight;
