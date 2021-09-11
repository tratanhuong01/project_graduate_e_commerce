import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PAGE_CART } from "../../../constants/Config";
import Logo from "../PaymentLeft/Logo/Logo";
import ItemOutOfStock from "./ItemOutOfStock/ItemOutOfStock";
import * as ordersAction from "../../../actions/order/index";

function OutOfStock(props) {
  //
  const orders = useSelector((state) => state.orders);
  useEffect(() => {}, [orders]);
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full xl:w-2/3 px-4 xl:pr-4 flex justify-end dark:text-white">
      <div className="w-full pr-10">
        <Logo />
        <div className="w-full pl-3 my-5 flex items-center">
          <i className="fas fa-exclamation-circle text-organce text-6xl"></i>
          <div className="px-6">
            <p className="font-semibold mb-2">Thông báo</p>
            <p className="text-sm text-gray-600">
              Một số sản phẩm trong giỏ hàng không còn đủ số lượng đặt hàng của
              quý khách vui lòng đặt số lượng mặt hàng còn lại của mặt hàng đó .
              Chúng tôi xin lỗi vì sự bất tiện này.
            </p>
          </div>
        </div>
        <div className="w-full pl-3 my-3">
          <div
            className="w-full flex items-center py-3 border-b-2 border-solid 
          border-gray-200 font-bold"
          >
            <span className="w-4/5">Sản phẩm</span>
            <span className="w-1/5 flex justify-end">Số lượng</span>
          </div>
        </div>
        {orders.listOutOfStock.map((order, index) => {
          return <ItemOutOfStock order={order} key={index} />;
        })}
        <div className="w-full h-20 flex mb-32">
          <p className="w-1/2 float-left flex items-center text-xl font-semibold text-organce">
            <span className="flex items-center">
              <Link to={PAGE_CART}>
                <i className="bx bxs-chevron-left mr-3"></i>
                Quay về giỏ hàng
              </Link>
            </span>
          </p>
          <p className="w-1/2 float-right flex justify-end items-center">
            <button
              onClick={() => {
                let clone = [...orders.list];
                orders.listOutOfStock.forEach((element) => {
                  const index = clone.findIndex(
                    (order) => (order.idCart = element.idCart)
                  );
                  if (index !== -1) clone[index].amount = 5;
                });
                dispatch(ordersAction.updateOrderIsOutOfStock(clone));
              }}
              type="button"
              className={`py-3 px-5 bg-organce rounded-lg text-white font-semibold`}
            >
              Tiếp tục
            </button>
          </p>
        </div>
        <hr className="bg-gray-200"></hr>
        <p className="text-gray-600 font-semibold text-right my-3">
          Cảm ơn quý khách đã tin tưởng và sử dụng HSmart
        </p>
      </div>
    </div>
  );
}

export default OutOfStock;
