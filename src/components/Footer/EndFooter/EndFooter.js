import React from "react";

function EndFooter(props) {
  return (
    <div className="xl:w-4/5 w-full flex flex-col sm:flex-row mx-auto my-3 p-4">
      <div className="w-full text-center md:text-left md:w-1/4 px-2">
        <div className="w-full flex h-32">
          <span className="text-4xl flex items-center font-semibold">
            XSMART
          </span>
        </div>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500">Gọi miễn phí</span>
          <span className="w-full">1800 1234</span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500">Địa chỉ</span>
          <span className="w-full">Tòa nhà Ladeco</span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500">Email</span>
          <span className="w-full">xsmart@gmail.com</span>
        </p>
      </div>
      <div className="w-full text-center md:text-left md:w-1/4 px-2">
        <div className="w-full flex h-32">
          <p className="flex items-center text-xl">Về chúng tôi</p>
        </div>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500">Trang chủ</span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500">Sản phẩm</span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500">Tin tức</span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500">Giới thiệu</span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500">Liên hệ</span>
        </p>
      </div>
      <div className="w-full text-center md:text-left md:w-1/4 px-2">
        <div className="w-full flex h-32">
          <p className="flex items-center text-xl">Về chúng tôi</p>
        </div>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500">Trang chủ</span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500">Sản phẩm</span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500">Tin tức</span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500">Giới thiệu</span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500">Liên hệ</span>
        </p>
      </div>
      <div className="w-full text-center md:text-left md:w-1/4 px-2">
        <div className="w-full flex h-32">
          <p className="flex items-center text-xl">Được chứng nhận</p>
        </div>
        <p className="w-full flex flex-wrap mb-5 justify-center">
          <img src="./images/thongbao.png" alt="" />
        </p>
        <div className="w-full flex h-20">
          <p className="flex items-center text-xl">Hình thức thanh toán</p>
        </div>
        <p className="w-full flex flex-wrap mb-5 justify-center">
          <img src="./images/payment.png" alt="" />
        </p>
      </div>
    </div>
  );
}

export default EndFooter;
