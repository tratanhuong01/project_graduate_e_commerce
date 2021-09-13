import React from "react";
import TreeProcess from "./TreeProcess/TreeProcess";

function InfoDetailBill(props) {
  //
  const { bill } = props;
  //
  return (
    <div className="w-full my-3 flex flex-col lg:flex-row">
      <div
        className="w-full lg:w-1/4 text-sm lg:text-xs mb-1 lg:mb-5  text-gray-600 
      dark:text-white"
      >
        <p className="text-xl lg:text-2xl mb-2 lg:mb-6">Địa chỉ nhận hàng</p>
        <p className="text-xl lg:text-sm font-semibold ">
          {bill.bill.fullName}
        </p>
        <p className="text-sm lg:text-xs">
          (+84) {bill.bill.phone.substring(1)}
        </p>
        <p className="text-sm lg:text-xs">{bill.bill.address}</p>
      </div>
      <div className="w-full lg:w-3/4 flex pl-6 border-l-2 border-solid border-gray-200">
        <div className="w-40">
          <div className="w-full flex">
            <TreeProcess />
            <div className="w-auto pl-3">
              <div className="w-full text-gray-600 dark:text-white">
                <div className="w-full h-7 text-sm flex items-start mt-2">
                  10:20 07-06-2021
                </div>
                <div className="w-full h-7 text-sm flex items-start ">
                  10:20 07-06-2021
                </div>
                <div className="w-full h-7 text-sm flex items-start ">
                  10:20 07-06-2021
                </div>
                <div className="w-full h-7 text-sm flex items-start ">
                  10:20 07-06-2021
                </div>
                <div className="w-full h-7 text-sm flex items-start ">
                  10:20 07-06-2021
                </div>
                <div className="w-full h-7 text-sm flex items-start ">
                  10:20 07-06-2021
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-auto pl-5 text-gray-600 dark:text-white">
          <div className="w-auto h-7 text-sm flex items-start mt-2 text-green font-semibold">
            Giao hàng thành công. Người nhận hàng
          </div>
          <div className="w-auto h-7 text-sm flex items-start ">
            Đang giao hàng
          </div>
          <div className="w-auto h-7 text-sm flex items-start ">
            Đơn hàng đã đến kho Thành phố Qui Nhơn
          </div>
          <div className="w-auto h-7 text-sm flex items-start ">
            Đơn hàng đã xuất khỏi kho Thành phố Qui Nhơn
          </div>
          <div className="w-auto h-7 text-sm flex items-start ">
            Lấy hàng thành công
          </div>
          <div className="w-auto h-7 text-sm flex items-start ">
            Người gửi đang chuẩn bị hàng
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoDetailBill;
