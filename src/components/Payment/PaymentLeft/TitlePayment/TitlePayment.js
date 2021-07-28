import React, { Component } from "react";

class TitlePayment extends Component {
  render() {
    return (
      <div className="w-full h-10">
        <div className="float-left font-semibold text-xl">
          Thông tin nhận hàng
        </div>
        <div className="text-organce flex float-right">
          <p className="flex items-center cursor-pointer">
            <i className="bx bxs-user-circle text-xl mr-2"></i>
            Đăng nhập
          </p>
        </div>
      </div>
    );
  }
}

export default TitlePayment;
