import React from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../../constants/Config";

function EndPayment(props) {
  //
  const { sumMoney, fee, orders } = props;

  return (
    <div className="w-full py-3">
      <div className="w-full h-12 mb-3 flex">
        <p className="w-1/2 float-left flex items-center">Tạm tính</p>
        <p className="w-1/2 justify-end float-right flex items-center">
          {new Intl.NumberFormat("ban", "id").format(sumMoney)} <u>đ</u>
        </p>
      </div>
      <div className="w-full h-12 mb-3 flex">
        <p className="w-1/2 float-left flex items-center">Phí vận chuyển</p>
        <p className="w-1/2 justify-end float-right flex items-center">
          {new Intl.NumberFormat("ban", "id").format(fee)} <u>đ</u>
        </p>
      </div>
      <hr className="my-3"></hr>
      <div className="w-full h-12 mb-3 flex">
        <p className="w-1/2 float-left flex items-center text-xl font-semibold">
          Tổng cộng
        </p>
        <p className="w-1/2 justify-end float-right flex items-center">
          {new Intl.NumberFormat("ban", "id").format(sumMoney + fee)} <u>đ</u>
        </p>
      </div>
      {!orders.outOfStock && (
        <div className="w-full h-20 mb-3 flex">
          <p className="w-1/2 float-left flex items-center text-xl font-semibold text-organce">
            <span className="flex items-center">
              <Link to={Config.PAGE_CART}>
                <i className="bx bxs-chevron-left mr-3"></i>
                Quay về giỏ hàng
              </Link>
            </span>
          </p>
          <p className="w-1/2 float-right flex justify-end items-center">
            <button
              type="submit"
              className={`py-3 px-5 ${
                sumMoney === 0 ? "bg-gray-500 cursor-not-allowed" : "bg-organce"
              } rounded-lg text-white 
            font-semibold`}
            >
              Đặt hàng
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default EndPayment;
