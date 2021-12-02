import React, { useEffect, useState } from "react";
import notify from "../../../assets/images/notify.png";
import payment from "../../../assets/images/payment.png";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import api from "../../../Utils/api";
import { PAGE_ABOUT, PAGE_CONTACT, PAGE_INDEX, PAGE_NEWS, PAGE_PRODUCT } from "../../../constants/Config";
function EndFooter(props) {
  //
  const [info, setInfo] = useState(null);
  useEffect(() => {
    //
    let unmounted = false;
    const fetch = async () => {
      const resultInfo = await api(`configWebsites/type/${2}`, 'GET', null);
      const resultLogo = await api(`configWebsites/type/${1}`, 'GET', null);
      if (unmounted) return;
      let data = {};
      if (resultInfo.data) {
        setInfo(Object.assign(data, JSON.parse(resultInfo.data.content).data));
      }
      if (resultLogo.data) {
        setInfo({ ...data, logo: JSON.parse(resultLogo.data.content).data });
      }
    }
    fetch();
    return () => {
      unmounted = false;
    }
    //
  }, []);
  //  
  return (
    <div className="xl:w-4/5 w-full flex flex-col sm:flex-row mx-auto px-4 py-7 dark:text-gray-300">
      <div className="w-full text-center md:text-left md:w-1/4 px-2">
        <div className="w-full flex h-32 items-center justify-center">
          <Link to="" className="w-1/2 lg:w-3/4 mx-auto ">
            <img src={info ? info.logo ? info.logo : "" : ""} alt="" className="w-full object-contain" />
          </Link>
        </div>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500 dark:text-white">
            Gọi miễn phí
          </span>
          <span className="w-full">
            {info ? info.phone ? info.phone : '' : ''}
          </span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500 dark:text-white">
            Địa chỉ
          </span>
          <span className="w-full">
            {info ? info.address ? info.address : '' : ''}
          </span>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <span className="w-full mb-1 text-gray-500 dark:text-white">
            Email
          </span>
          <span className="w-full">
            {info ? info.email ? info.email : '' : ''}
          </span>
        </p>
      </div>
      <div className="w-full text-center md:text-left md:w-1/4 px-2">
        <div className="w-full flex h-32">
          <p className="flex items-center text-xl">Về chúng tôi</p>
        </div>
        <p className="w-full flex flex-wrap mb-5">
          <Link to={PAGE_INDEX} className="w-full mb-1 text-gray-500 dark:text-white">
            Trang chủ
          </Link>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <Link to={PAGE_PRODUCT} className="w-full mb-1 text-gray-500 dark:text-white">
            Sản phẩm
          </Link>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <Link to={PAGE_NEWS} className="w-full mb-1 text-gray-500 dark:text-white">
            Tin tức
          </Link>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <Link to={PAGE_ABOUT} className="w-full mb-1 text-gray-500 dark:text-white">
            Giới thiệu
          </Link>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <Link to={PAGE_CONTACT} className="w-full mb-1 text-gray-500 dark:text-white">
            Liên hệ
          </Link>
        </p>
      </div>
      <div className="w-full text-center md:text-left md:w-1/4 px-2">
        <div className="w-full flex h-32">
          <p className="flex items-center text-xl">Về chúng tôi</p>
        </div>
        <p className="w-full flex flex-wrap mb-5">
          <Link to={PAGE_INDEX} className="w-full mb-1 text-gray-500 dark:text-white">
            Trang chủ
          </Link>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <Link to={PAGE_PRODUCT} className="w-full mb-1 text-gray-500 dark:text-white">
            Sản phẩm
          </Link>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <Link to={PAGE_NEWS} className="w-full mb-1 text-gray-500 dark:text-white">
            Tin tức
          </Link>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <Link to={PAGE_ABOUT} className="w-full mb-1 text-gray-500 dark:text-white">
            Giới thiệu
          </Link>
        </p>
        <p className="w-full flex flex-wrap mb-5">
          <Link to={PAGE_CONTACT} className="w-full mb-1 text-gray-500 dark:text-white">
            Liên hệ
          </Link>
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
