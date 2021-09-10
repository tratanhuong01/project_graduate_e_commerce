import React from "react";
import { useSelector } from "react-redux";

function PaymentMethod(props) {
  //
  const orders = useSelector((state) => state.orders);
  //
  return (
    <>
      <div className="w-full h-10 mt-5">
        <div className="float-left font-semibold text-xl">Thanh toán</div>
      </div>
      <div className="w-full my-3">
        <div className="w-full flex">
          <p className="w-full flex items-center">
            <input
              type="radio"
              name="payment"
              className="transform scale-125 mr-3"
              onChange={() => ""}
              checked={orders.paymentMethod === 0 ? true : false}
            />
            Thanh toán khi giao hàng (COD)
          </p>
        </div>
        <div className="w-full my-3">
          <div
            className="w-full my-3 p-3 bg-organce rounded-lg text-center text-white 
                              font-semibold text-xm"
          >
            Bạn chỉ phải thanh toán khi nhận được hàng
          </div>
        </div>
      </div>
      <div className="w-full my-3">
        <div className="w-full flex">
          <p className="w-full flex items-center">
            <input
              type="radio"
              name="payment"
              className="transform scale-125 mr-3"
              onChange={() => ""}
              checked={orders.paymentMethod === 1 ? true : false}
            />
            Thanh toán bằng thẻ ngân hàng (COD)
          </p>
        </div>
        <div className="w-full my-3"></div>
      </div>
    </>
  );
}

export default PaymentMethod;
