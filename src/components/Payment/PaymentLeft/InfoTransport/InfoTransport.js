import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function InfoTransport(props) {
  //
  const orders = useSelector((state) => state.orders);
  useEffect(() => {}, [orders]);
  console.log(orders);
  //
  return (
    <>
      <div className="w-full h-10">
        <div className="float-left font-semibold text-xl">Vận chuyển</div>
      </div>
      <div className="my-3 w-full font-semibold text-gray-900 dark:text-gray-300">
        {orders.infoPayment.status ? (
          <>
            <div className="w-full py-0.5 flex">
              <div className="flex items-center">
                Họ Tên : {`${orders.infoPayment.fullName}`}
              </div>
            </div>
            <div className="flex items-center my-0.5">
              Số điện thoại : {orders.infoPayment.phone}
            </div>
            <div className="flex py-0.5 items-center">
              <ul className="flex">
                Địa chỉ :
                {` ${orders.infoPayment.address} , 
                ${orders.infoPayment.ward ? orders.infoPayment.ward : "..."} ,  
                ${
                  orders.infoPayment.district
                    ? orders.infoPayment.district
                    : "..."
                } , 
                ${
                  orders.infoPayment.cityProvince
                    ? orders.infoPayment.cityProvince
                    : "..."
                }`}
              </ul>
            </div>
            <p className="my-1 break-words">{`Ghi chú : ${orders.infoPayment.note}`}</p>
          </>
        ) : (
          <div
            className="w-full my-3 p-3 bg-organce rounded-lg text-center text-white 
                        font-semibold text-xm"
          >
            Vui lòng nhập thông tin giao hàng
          </div>
        )}
      </div>
    </>
  );
}

export default InfoTransport;
