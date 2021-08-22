import React from "react";
import NumberProduct from "../../../components/Payment/PaymentRight/NumberProduct/NumberProduct";
import ItemProductPayment from "../../../components/Payment/PaymentRight/ItemProductPayment/ItemProductPayment";
import ApplyCode from "../../../components/Payment/PaymentRight/ApplyCode/ApplyCode";
import EndPayment from "../../../components/Payment/PaymentRight/EndPayment/EndPayment";
import { useSelector } from "react-redux";

function PaymentRight(props) {
  //
  const states = useSelector((state) => {
    return {
      orders: state.orders,
    };
  });
  const { orders } = states;
  //
  return (
    <div className="w-full xl:w-1/3 xl:h-screen overflow-auto py-3 px-4 dark:text-white">
      <div className="w-full">
        <NumberProduct />
        <div className="w-full my-5 hidden xl:block">
          {orders.map((item, index) => {
            return <ItemProductPayment item={item} key={index} />;
          })}
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
