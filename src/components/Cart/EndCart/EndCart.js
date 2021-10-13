import React from "react";
import * as Config from "../../../constants/Config";
import * as ordersAction from "../../../actions/order/index";
import { useDispatch } from "react-redux";
import Button from "../../Button/Button";

function EndCart({ sumMoney, carts }) {
  //
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full my-5 flex dark:text-white">
      <div className="w-1/4 hidden sm:flex sm:justify-start  items-center">
        <Button
          to={Config.PAGE_PRODUCT}
          className="w-44 px-5 py-3.5 rounded-full shadow-lg bg-white  
            font-semibold text-sm border-2 border-solid  border-orangce * hover:bg-organce 
            hover:text-white flex items-center hover:border-white dark:bg-dark-third"
        >
          Tiếp tục mua hàng
        </Button>
      </div>
      <div className="w-full sm:w-3/4 pl-7 md:pl-0 ">
        <div className="w-full md:w-4/5 ml-auto flex mb-3">
          <div
            className="w-1/2 rounded-l-full font-semibold text-base p-4 dark:border-dark-third 
            border-2 border-solid border-gray-200 text-xm text-center"
          >
            Tổng giá các sản phẩm :
          </div>
          <div
            className="w-1/2 rounded-r-full font-semibold text-base p-4 dark:border-dark-third 
          text-organce border-2 border-solid border-gray-200 text-center"
          >
            {new Intl.NumberFormat("ban", "id").format(sumMoney)} <u>đ</u>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button
            linkUseClick={true}
            to={Config.PAGE_PAYMENT}
            onClick={() => dispatch(ordersAction.loadOrder(carts.main))}
            className={`px-12 py-4 text-base rounded-full shadow-lg
            font-semibold flex text-white border-solid border-2 border-gray-100 
            ml-10 * items-center ${
              sumMoney === 0 ? "cursor-not-allowed  bg-gray-500" : "bg-organce"
            } `}
            disabled={sumMoney === 0 && true}
          >
            Thanh toán
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EndCart;
