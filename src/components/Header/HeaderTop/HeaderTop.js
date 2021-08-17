import React from "react";
import ColorWebsite from "./ColorWebsite/ColorWebsite";

function HeaderTop(props) {
  return (
    <div className="xl:w-4/5 hidden px-3 w-full mx-auto md:flex text-gray-500 text-xs my-4 items-center header__top">
      <div className="md:w-3/12 lg:w-1/2 flex items-center">
        <ColorWebsite />
        <span className="bx bx-phone ml-3 mr-2"></span>
        <span className="mr-4 hover:text-organce cursor-pointer">
          0354114665
        </span>
        <span className="bx bx-mail-send mr-2"></span>
      </div>
      <div className="md:w-10/12 lg:w-1/2 flex justify-end items-center">
        <ul className="flex justify-end items-center font-semibold">
          <li className="flex items-center">
            <span className="bx bx-user ml-1 mr-2"></span>
            <span className="mr-4 hover:text-organce cursor-pointer">
              Trà Hưởng
            </span>
          </li>
          <li className="flex items-center">
            <span className="bx bxl-paypal ml-1 mr-2"></span>
            <span className="mr-4 hover:text-organce cursor-pointer">
              Hóa đơn
            </span>
          </li>
          <li className="flex items-center">
            <span className="bx bx-lock ml-1 mr-2"></span>
            <span className="mr-4 hover:text-organce cursor-pointer">
              Đăng nhập
            </span>
          </li>
          <li className="flex items-center">
            <span className="bx bx-lock ml-1 mr-2"></span>
            <span className="hover:text-organce cursor-pointer">Đăng kí</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderTop;
