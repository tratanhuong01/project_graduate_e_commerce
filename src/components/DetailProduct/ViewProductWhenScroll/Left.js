import React from "react";

function Left(props) {
  return (
    <div className="w-1/2 flex flex-wrap">
      <div className="w-1/5">
        <img src="\images\products\product__SP100__GRAY.png" alt="" />
      </div>
      <div className="w-4/5 pl-4">
        <p className="mb-2">Apple Watch</p>
        <p className="text-xm">
          <span className="text-organce mr-4">
            {new Intl.NumberFormat(["ban", "id"]).format(12345678)}
            <u>đ</u>
          </span>
          <span className="text-gray-500 mr-4">
            <strike>
              {new Intl.NumberFormat(["ban", "id"]).format(1234567)} <u>đ</u>
            </strike>
          </span>
          <span className="mr-4">|</span>
          <span className="text-gray-500">Giao hàng 1 - 2 ngày làm việc</span>
        </p>
        <hr className="my-3"></hr>
        <ul className="flex">
          <li className="cursor-pointer hover:text-organce text-gray-500">
            Thông tin sản phẩm
          </li>
          <li className="px-3">|</li>
          <li className="cursor-pointer text-organce">Mô tả sản phẩm</li>
        </ul>
      </div>
    </div>
  );
}

export default Left;
