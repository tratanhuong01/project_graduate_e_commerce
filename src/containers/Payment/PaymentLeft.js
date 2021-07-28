import React, { Component } from "react";
import TitlePayment from "../../components/Payment/PaymentLeft/TitlePayment/TitlePayment";
import Logo from "../../components/Payment/PaymentLeft/Logo/Logo";
import FormInfoPayment from "../../components/Payment/PaymentLeft/FormInfoPayment/FormInfoPayment";
import InfoTransport from "../../components/Payment/PaymentLeft/InfoTransport/InfoTransport";
import PaymentMethod from "../../components/Payment/PaymentLeft/PaymentMethod/PaymentMethod";
class PaymentLeft extends Component {
  render() {
    return (
      <div className="w-full xl:w-2/3 px-4 xl:pr-4 flex justify-end">
        <div className="w-full">
          <Logo />
          <div className="w-full flex flex-col xl:flex-row">
            <div className="w-full xl:w-1/2 pr-4">
              <TitlePayment />
              <FormInfoPayment />
            </div>
            <div className="w-full xl:w-1/2 xl:pl-4">
              <InfoTransport />
              <PaymentMethod />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentLeft;
