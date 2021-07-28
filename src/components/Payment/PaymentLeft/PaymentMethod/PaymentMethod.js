import React, { Component } from "react";

class PaymentMethod extends Component {
  render() {
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
              />
              Thanh toán khi giao hàng (COD)
            </p>
          </div>
          <div className="w-full my-3"></div>
        </div>
      </>
    );
  }
}

export default PaymentMethod;
