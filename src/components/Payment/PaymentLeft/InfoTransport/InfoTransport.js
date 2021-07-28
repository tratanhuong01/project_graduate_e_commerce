import React, { Component } from "react";

class InfoTransport extends Component {
  render() {
    return (
      <>
        <div className="w-full h-10">
          <div className="float-left font-semibold text-xl">Vận chuyển</div>
        </div>
        <div className="my-3 w-full">
          <div
            className="w-full my-3 p-3 bg-organce rounded-lg text-center text-white 
                            font-semibold text-xm"
          >
            Vui lòng nhập thông tin giao hàng
          </div>
        </div>
      </>
    );
  }
}

export default InfoTransport;
