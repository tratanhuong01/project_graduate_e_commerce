import React, { memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart/ItemCart";
import * as Config from "../../../constants/Config";
import * as ordersAction from "../../../actions/order/index";
import Button from "../../Button/Button";
import { useHistory } from "react-router-dom";
function ModalCartAdded() {
  //
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const history = useHistory();
  const money = useMemo(() => {
    let sum = 0;
    carts.list.forEach((element) => {
      sum +=
        element.priceOutput * ((100 - element.sale) / 100) * element.amount;
    });
    return sum;
  }, [carts]);
  //
  return (
    <div
      className="w-80 rounded-lg absolute animate__animated animate__zoomIn 
      text-gray-700  modal__cart__added border-2 border-solid dark:border-dark-second
      border-gray-200 shadow-lg dark:bg-dark-main dark:text-white z-main "
      style={{ right: "-16px", top: "80px" }}
    >
      <div
        className="w-full rounded-lg bg-white relative shadow-lg dark:bg-dark-main dark:text-white z-main arrow__popup dark:arrow__popup"
        style={{
          boxShadow: "0 2px 20px rgb(0 0 0 / 50%)",
        }}
      >
        <div className="w-full max-h-72 overflow-y-auto p-2 scrollbar-css">
          {carts.list.length === 0 ? (
            <>
              <p className="text-center font-semibold my-4">
                Chưa có sản phẩm nào trong giỏ hàng
              </p>
              <div
                className="flex justify-center items-center text-blue-500 
                font-semibold"
              >
                <Link to={Config.PAGE_PRODUCT}>Xem thêm sản phẩm</Link>
              </div>
            </>
          ) : (
            carts.list.map((cart, index) => {
              return <ItemCart cart={cart} key={index} />;
            })
          )}
        </div>
        <hr className="my-1 dark:border-dark-second"></hr>
        <div className="w-full flex p-2 h-12">
          <div
            className="w-1/2 float-left justify-start flex items-center 
            font-semibold text-base"
          >
            Thành tiền :
          </div>
          <div
            className="w-1/2 float-right justify-end flex items-center 
            text-organce pr-4"
          >
            {new Intl.NumberFormat(["ban", "id"]).format(money)} <u>đ</u>
          </div>
        </div>

        <hr className="my-1 dark:border-dark-second"></hr>
        <div className="w-full p-2 h-16">
          <Link
            to={Config.PAGE_CART}
            className="px-6 py-2 rounded-full bg-organce 
          hover:bg-white hover:border-white border-2 border-solid text-white
          border-white shadow-lg float-left flex items-center font-semibold 
          hover:text-black ml-2"
          >
            Giỏ hàng
          </Link>

          <Button
            linkUseOnClick={false}
            onClick={() => {
              console.log(carts.list);
              if (money === 0) return;
              else {
                dispatch(ordersAction.loadOrder(carts.list));
                history.push(Config.PAGE_PAYMENT);
              }
            }}
            disabled={money === 0 && true}
            className="px-6 py-2 rounded-full hover:bg-organce 
            bg-white border-white border-2 border-solid hover:text-white
            hover:border-white shadow-lg float-right flex items-center font-semibold 
            text-black ml-2 dark:text-black"
          >
            Thanh toán
          </Button>
        </div>
      </div>
    </div>
  );
}

export default memo(ModalCartAdded);
