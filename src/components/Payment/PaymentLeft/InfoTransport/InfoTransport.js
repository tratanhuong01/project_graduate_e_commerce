import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function InfoTransport(props) {
  //
  const orders = useSelector((state) => state.orders);
  useEffect(() => {}, [orders]);
  //
  return (
    <>
      <div className="w-full h-10">
        <div className="float-left font-semibold text-xl">
          Thông tin vận chuyển
        </div>
      </div>
      <div className="my-3 w-full font-semibold text-gray-700 dark:text-gray-300">
        {orders.infoPayment.status ? (
          <>
            <div className="w-full py-0.5 flex">
              <div className="flex items-center">
                Họ Tên : {`${orders.infoPayment.fullName}`}
              </div>
            </div>
            <div className="flex items-center my-0.5">
              Số điện thoại :{" "}
              <span className="px-2 py-0.5 text-white cursor-pointer ml-4 rounded-full border-2 border-solid border-red-500 bg-red-500 ">
                {orders.infoPayment.phone}
              </span>
            </div>
            <div className="flex py-0.5 items-center">
              Địa chỉ :
              {` ${orders.infoPayment.address} , 
                ${
                  orders.infoPayment.ward
                    ? JSON.parse(orders.infoPayment.ward).WardName
                    : "..."
                } ,  
                ${
                  orders.infoPayment.district
                    ? JSON.parse(orders.infoPayment.district).DistrictName
                    : "..."
                } , 
                ${
                  orders.infoPayment.cityProvince
                    ? JSON.parse(orders.infoPayment.cityProvince).ProvinceName
                    : "..."
                }`}
            </div>
            {orders.serviceChoose && (
              <div className="flex py-0.5 items-center">
                Dịch vụ vận chuyển :{" "}
                <span className="px-2 py-0.5 text-white cursor-pointer ml-4 rounded-full border-2 border-solid border-green-600  bg-green-600 ">
                  {orders.serviceChoose.short_name === "Đi bộ"
                    ? "Đường bộ"
                    : "Đường hàng không"}
                </span>
              </div>
            )}
            {orders.deliveryTime && (
              <div className="flex py-0.5 items-center text-green-600">
                Thòi gian giao hàng dự kiến : Sản phẩm sẽ được giao trước{" "}
                {orders.deliveryTime}
              </div>
            )}
            <p className="my-1 break-words">
              Ghi chú : {`${orders.infoPayment.note}`}
            </p>
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
