import React from "react";
import ItemProductBill from "./ItemProductBill/ItemProductBill";

function ItemBillContent(props) {
  //
  const { cost, bill } = props;
  const calcBill = () => {
    let sum = 0;
    if (bill)
      bill.billDetailList.forEach((element) => {
        sum += element.billDetail.price * element.billDetail.amount;
      });
    return sum;
  };
  //
  return (
    <>
      <div className="w-full relative">
        {bill &&
          bill.billDetailList.map((product, index) => {
            return <ItemProductBill product={product} key={index} />;
          })}
      </div>
      {!cost && (
        <div
          className="w-full flex my-2 py-3 items-center 
          justify-end text-organce font-semibold"
        >
          <span className="bx bx-check-shield text-2xl mr-3"></span>
          <span className="text-gray-600 dark:text-gray-300 mr-3">
            Tổng số tiền :
          </span>
          <span className="text-2xl">
            {new Intl.NumberFormat().format(calcBill())}đ
          </span>
        </div>
      )}
    </>
  );
}

export default ItemBillContent;
