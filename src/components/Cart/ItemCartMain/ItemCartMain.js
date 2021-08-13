import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as cartsAction from "../../../actions/cart/index";
import * as Config from "../../../constants/Config";

function ItemCartMain(props) {
  //
  const { cart } = props;
  const dispatch = useDispatch();
  const [number, setNumber] = useState(cart.amount);
  const states = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const { user } = states;
  //
  return (
    <div className="w-full my-3 mb-5 flex md:bg-white">
      <div className="w-10 flex justify-center p-3 relative">
        <input
          type="checkbox"
          className="transform scale-125 absolute top-1/2 left-2"
        />
      </div>
      <div className="w-1/4 md:w-2/12 flex justify-center pb-1 md:p-3">
        <img
          src={cart.image.src}
          className="w-full md:w-11/12 sm:px-3 object-cover"
          alt=""
        />
      </div>
      <div className="w-2/4 md:w-7/12 flex justify-center flex-col md:flex-row">
        <div className="w-full md:w-2/4 flex justify-center pb-1 md:p-3">
          <div className="flex items-center">
            <div className="">
              <p
                className="mb-2 text-gray-700 text-base hover:text-organce text-center 
                  cursor-pointer font-semibold"
              >
                <Link to={`${Config.PAGE_DETAIL_PRODUCT}/${cart.slug}`}>
                  {cart.nameLineProduct}
                </Link>
              </p>
              <p className="text-gray-500 text-base  text-center">
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
                  cursor-pointer"
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
        <div className="w-full md:w-1/4 flex justify-center pb-1 md:p-3">
          <div className="flex items-center">
            <div>
              <input
                type="number"
                className="w-28 p-3 border-2 border-solid border-gray-300 
                  rounded-full text-center font-semibold"
                min="1"
                value={number}
                onChange={(event) => {
                  setNumber(event.target.value);
                  dispatch(
                    cartsAction.changeAmountCartRequest({
                      amount: event.target.value,
                      idCart: cart.idCart,
                      user: user,
                    })
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 md:w-3/12 flex flex-col sm:flex-row justify-center">
        <div className="w-full sm:w-2/3 flex justify-center pb-1 md:p-3">
          <div className="flex items-center">
            <div className="">
              <p className="mb-2 font-semibold md:hidden text-center">
                Tổng tiền
              </p>
              <p
                className="mb-2 text-gray-700 text-base text-organce text-center 
                  cursor-pointer"
              >
                {new Intl.NumberFormat("ban", "id").format(
                  cart.priceOutput * ((100 - cart.sale) / 100) * cart.amount
                )}{" "}
                <u>đ</u>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center pb-1 md:p-3">
          <div className="flex items-center">
            <i
              onClick={() =>
                dispatch(
                  cartsAction.deleteCartRequest({
                    user: user,
                    idCart: cart.idCart,
                  })
                )
              }
              className="bx bx-trash-alt text-3xl mb-3 cursor-pointer 
              hover:text-organce"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCartMain;
