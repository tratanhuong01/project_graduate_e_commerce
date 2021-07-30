import React from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart/ItemCart";

function ModalCartAdded(props) {
  return (
    <div
      className="w-80 rounded-lg bg-white absolute animate__animated animate__zoomIn 
    top-20 right-1/4 text-gray-700 z-50 modal__cart__added border-2 border-solid 
    border-gray-200 shadow-lg "
    >
      <div className="w-full max-h-72 overflow-y-auto p-2 scrollbar-css">
        {-1 === 0 ? (
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
          <ItemCart />
        )}
      </div>
      <hr className="my-1"></hr>
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
          {new Intl.NumberFormat(["ban", "id"]).format(12345678)} <u>đ</u>
        </div>
      </div>

      <hr className="my-1"></hr>
      <div className="w-full p-2 h-16">
        <Link
          to=""
          className="px-6 py-2 rounded-full bg-organce 
        hover:bg-white hover:border-white border-2 border-solid text-white
        border-white shadow-lg float-left flex items-center font-semibold 
        hover:text-black ml-2"
        >
          Giỏ hàng
        </Link>

        <button
          type="button"
          className="px-6 py-2 rounded-full hover:bg-organce 
          bg-white border-white border-2 border-solid hover:text-white
          hover:border-white shadow-lg float-right flex items-center font-semibold 
          text-black ml-2"
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
}

export default ModalCartAdded;
