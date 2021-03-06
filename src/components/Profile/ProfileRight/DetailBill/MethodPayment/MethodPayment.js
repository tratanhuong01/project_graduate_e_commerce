import React from "react";

function MethodPayment(props) {
  //
  const { bill } = props;
  //
  return (
    <div className="w-full flex text-sm">
      <div className="w-2/3 lg:w-3/4 py-3 flex items-center justify-end text-organce">
        <span className="bx bx-check-shield text-2xl mr-3"></span>
        <span className="text-gray-600 mr-3 dark:text-white">
          Phương thức thanh toán
        </span>
      </div>
      <div
        className="w-1/3 lg:w-1/4 py-3 flex items-center justify-end text-sm 
      text-gray-600 dark:text-white"
      >
        {bill.bill.paymentMethodBill.namePaymentMethod}
      </div>
    </div>
  );
}

export default MethodPayment;
