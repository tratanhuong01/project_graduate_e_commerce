import React from "react";
import TreeProcess from "./TreeProcess/TreeProcess";

function InfoDetailBill(props) {
  return (
    <div className="w-full my-3 flex">
      <div className="w-1/4 text-xs text-gray-600">
        <p className="text-2xl mb-6">Địa chỉ nhận hàng</p>
        <p className="text-sm font-semibold ">Trà Hưởng</p>
        <p className="text-xs">(+84) 354114665</p>
        <p className="text-xs">
          Tổ 1 Thôn Bình An, Xã Bình Định Bắc, Huyện Thăng Bình, Quảng Nam
        </p>
      </div>
      <div className="w-3/4 flex pl-6 border-l-2 border-solid border-gray-200">
        <div className="w-44">
          <div className="w-full flex">
            <TreeProcess />
            <div className="w-3/4">
              <div className="w-full text-gray-600 ">
                <div className="w-full h-7 text-xm flex items-start mt-2">
                  10:20 07-06-2021
                </div>
                <div className="w-full h-7 text-xm flex items-start ">
                  10:20 07-06-2021
                </div>
                <div className="w-full h-7 text-xm flex items-start ">
                  10:20 07-06-2021
                </div>
                <div className="w-full h-7 text-xm flex items-start ">
                  10:20 07-06-2021
                </div>
                <div className="w-full h-7 text-xm flex items-start ">
                  10:20 07-06-2021
                </div>
                <div className="w-full h-7 text-xm flex items-start ">
                  10:20 07-06-2021
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-5 text-gray-600">
          <div className="w-full h-7 text-xm flex items-start mt-2 text-green font-semibold">
            Giao hàng thành công. Người nhận hàng
          </div>
          <div className="w-full h-7 text-xm flex items-start ">
            Đang giao hàng
          </div>
          <div className="w-full h-7 text-xm flex items-start ">
            Đơn hàng đã đến kho Thành phố Qui Nhơn
          </div>
          <div className="w-full h-7 text-xm flex items-start ">
            Đơn hàng đã xuất khỏi kho Thành phố Qui Nhơn
          </div>
          <div className="w-full h-7 text-xm flex items-start ">
            Lấy hàng thành công
          </div>
          <div className="w-full h-7 text-xm flex items-start ">
            Người gửi đang chuẩn bị hàng
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoDetailBill;
