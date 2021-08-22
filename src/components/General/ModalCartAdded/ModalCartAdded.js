import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart/ItemCart";
import * as Config from "../../../constants/Config";
import * as modalsAction from "../../../actions/modal/index";

function ModalCartAdded(props) {
  //
  const dispatch = useDispatch();
  const { carts, user } = props;
  const sum = () => {
    let sum = 0;
    carts.forEach((element) => {
      sum +=
        element.priceOutput * ((100 - element.sale) / 100) * element.amount;
    });
    return sum;
  };

  //
  return (
    <div
      className="w-80 rounded-lg bg-white absolute animate__animated animate__zoomIn 
      text-gray-700 z-50 modal__cart__added border-2 border-solid dark:border-dark-second
      border-gray-200 shadow-lg m-4 dark:bg-dark-main dark:text-white"
      style={{ right: "-25%", top: "65px" }}
    >
      <div className="w-full max-h-72 overflow-y-auto p-2 scrollbar-css">
        {carts.length === 0 ? (
          <>
            <p className="text-center font-semibold my-4">
              Chưa có sản phẩm nào trong giỏ hàng
            </p>
            <div
              className="flex justify-center items-center text-blue-500 
            font-semibold"
            >
              <Link to="">Xem thêm sản phẩm</Link>
            </div>
          </>
        ) : (
          carts.map((cart, index) => {
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
          {new Intl.NumberFormat(["ban", "id"]).format(sum())} <u>đ</u>
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
        {!user ? (
          <button
            onClick={() => {
              if (!user) dispatch(modalsAction.openModalLogin());
            }}
            type="button"
            className={`px-6 py-2 rounded-full border-white border-2 border-solid hover:text-white hover:border-white shadow-lg float-right flex items-center font-semibold  dark:text-black 
             ml-2 ${
               sum() === 0
                 ? "bg-gray-500 cursor-not-allowed text-white"
                 : "hover:bg-organce bg-white"
             } `}
            disabled={sum() === 0 ? true : false}
          >
            Thanh toán
          </button>
        ) : (
          <Link
            to={Config.PAGE_PAYMENT}
            className="px-6 py-2 rounded-full hover:bg-organce 
            bg-white border-white border-2 border-solid hover:text-white
            hover:border-white shadow-lg float-right flex items-center font-semibold 
            text-black ml-2 dark:text-black"
          >
            Thanh toán
          </Link>
        )}
      </div>
    </div>
  );
}

export default ModalCartAdded;
