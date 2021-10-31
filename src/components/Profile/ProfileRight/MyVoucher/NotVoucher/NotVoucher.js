import React from "react";

function NotVoucher(props) {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <img
        src="https://i.pinimg.com/originals/48/fb/90/48fb90bcf2a1f779ee66deee8a12c898.png"
        alt=""
        className="w-52 h-52 object-cover mx-auto"
      />
      <p className="text-center font-semibold text-gray-600 my-3">
        Chưa có voucher
      </p>
    </div>
  );
}

export default NotVoucher;
