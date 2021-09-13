import React from "react";

function CostDetailBill(props) {
  //
  const { bill } = props;
  const sum = () => {
    let sum = 0;
    bill.billDetailList.forEach((item) => {
      sum += item.billDetail.price * item.billDetail.amount;
    });
    return sum;
  };
  //
  return (
    <div className="w-full flex">
      <div className="w-2/3 lg:w-3/4 flex flex-col text-xs text-gray-600 dark:text-white">
        <div
          className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-100 border-r-2 pr-3"
        >
          Tổng tiền hàng
        </div>
        <div
          className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-100 border-r-2 pr-3"
        >
          Phí vận chuyển
        </div>
        <div
          className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-100 border-r-2 pr-3"
        >
          Giảm giá phí vận chuyển
        </div>
        <div
          className="w-full flex items-center justify-end py-6 border-b-2 border-solid 
        border-gray-100 border-r-2 pr-3"
        >
          Tổng số tiền
        </div>
      </div>
      <div className="w-1/3 lg:w-1/4 flex flex-col text-xs text-gray-600 dark:text-white">
        <div
          className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-100"
        >
          {new Intl.NumberFormat().format(sum())} đ
        </div>
        <div
          className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-100"
        >
          {new Intl.NumberFormat().format(bill.bill.fee)} d
        </div>
        <div
          className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-100"
        >
          {new Intl.NumberFormat().format(bill.bill.sale)} đ
        </div>
        <div
          className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-100 text-organce text-2xl font-semibold"
        >
          {new Intl.NumberFormat().format(bill.bill.total)} đ
        </div>
      </div>
    </div>
  );
}

export default CostDetailBill;
