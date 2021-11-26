import React from "react";

function NotBill(props) {
  return (
    <div className="w-full h-80 flex justify-center items-center flex-col">
      <img
        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5fafbb923393b712b96488590b8f781f.png"
        alt=""
        className="w-32 h-32 mx-auto"
      />
      <p className="text-center font-semibold text-gray-600 my-3 dark:text-gray-300">
        Chưa có đơn hàng
      </p>
    </div>
  );
}

export default NotBill;
