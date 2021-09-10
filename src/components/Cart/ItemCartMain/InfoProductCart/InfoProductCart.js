import React from "react";
import { Link } from "react-router-dom";
import { PAGE_DETAIL_PRODUCT } from "../../../../constants/Config";

function InfoProductCart(props) {
  //
  const { cart } = props;
  //
  return (
    <>
      <div className="w-full md:w-2/4 flex justify-center pb-1 md:p-3">
        <div className="flex items-center">
          <div className="">
            <p
              className="mb-2 text-gray-700 text-base hover:text-organce text-center 
                  cursor-pointer font-semibold  dark:text-white"
            >
              <Link to={`${PAGE_DETAIL_PRODUCT}/${cart.slug}`}>
                {cart.nameLineProduct}
              </Link>
            </p>
            <p className="text-gray-500 text-base  text-center dark:text-gray-300">
              {cart.color && `Màu : ${cart.color.description} - `}
              {cart.memory && `Bộ nhớ : ${cart.memory.nameMemory}`}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 flex justify-center pb-1 md:p-3">
        <div className="flex items-center">
          <div className="">
            <p
              className="mb-2 text-gray-700 text-base text-organce text-center 
                  cursor-pointer  dark:text-white"
            >
              <span className="md:hidden mr-3">Đơn giá :</span>
              {new Intl.NumberFormat("ban", "id").format(
                cart.priceOutput * ((100 - cart.sale) / 100)
              )}{" "}
              <u>đ</u>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoProductCart;
