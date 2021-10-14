import React from "react";
import notify from "../../../assets/images/notify.png";
import payment from "../../../assets/images/payment.png";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
function EndFooter(props) {
  return (
    <div className="xl:w-4/5 w-full flex flex-col sm:flex-row mx-auto px-4 py-7 dark:text-gray-300">
      <div className="w-full text-center md:text-left md:w-1/4 px-2">
        <div className="w-full flex h-32 items-center justify-center">
          <Link to="" className="w-1/2 lg:w-3/4 mx-auto ">
            <img src={logo} alt="" className="w-full object-contain" />
          </Link>
        </div>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500 dark:text-white">
            Gọi miễn phí
          </span>
          <span className="w-full">1800 1234</span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500 dark:text-white">
            Địa chỉ
          </span>
          <span className="w-full">Tòa nhà Ladeco</span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500 dark:text-white">
            Email
          </span>
          <span className="w-full">xsmart@gmail.com</span>
        </p>
      </div>
      <div className="w-full text-center md:text-left md:w-1/4 px-2">
        <div className="w-full flex h-32">
          <p className="flex items-center text-xl">Về chúng tôi</p>
        </div>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500 dark:text-white">
            Trang chủ
          </span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500 dark:text-white">
            Sản phẩm
          </span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500 dark:text-white">
            Tin tức
          </span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500 dark:text-white">
            Giới thiệu
          </span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500 dark:text-white">
            Liên hệ
          </span>
        </p>
      </div>
      <div className="w-full text-center md:text-left md:w-1/4 px-2">
        <div className="w-full flex h-32">
          <p className="flex items-center text-xl">Về chúng tôi</p>
        </div>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500 dark:text-white">
            Trang chủ
          </span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500 dark:text-white">
            Sản phẩm
          </span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500 dark:text-white">
            Tin tức
          </span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500 dark:text-white">
            Giới thiệu
          </span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500 dark:text-white">
            Liên hệ
          </span>
        </p>
      </div>
      <div className="w-full text-center md:text-left md:w-1/4 px-2">
        <div className="w-full flex h-32">
          <p className="flex items-center text-xl">Được chứng nhận</p>
        </div>
        <p className="w-full flex flex-wrap mb-5 justify-center">
          <img src={notify} alt="" />
        </p>
        <div className="w-full flex h-20">
          <p className="flex items-center text-xl">Hình thức thanh toán</p>
        </div>
        <p className="w-full flex flex-wrap pb-5 justify-center">
          <img src={payment} alt="" />
        </p>
      </div>
    </div>
  );
}

export default EndFooter;
