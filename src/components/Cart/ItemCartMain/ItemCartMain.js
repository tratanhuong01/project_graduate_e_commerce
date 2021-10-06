import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cartsAction from "../../../actions/cart/index";
import InfoProductCart from "./InfoProductCart/InfoProductCart";

function ItemCartMain(props) {
  //
  const { cart, carts, status } = props;
  const dispatch = useDispatch();
  const { headers, user } = useSelector((state) => {
    return {
      headers: state.headers,
      user: state.user,
    };
  });
  //
  return (
    <div className="w-full my-3 mb-5 flex md:bg-white dark:bg-dark-second dark:text-white lg:h-28">
      <div className="w-10 flex justify-center px-3 relative">
        <input
          type="checkbox"
          className="transform scale-125 absolute top-1/2 left-2"
          onChange={(event) => {
            if (event.target.checked)
              dispatch(cartsAction.loadCartMain([...carts.main, cart]));
            else {
              const index = carts.main.findIndex(
                (item) => item.idCart === cart.idCart
              );
              let cloneCartPayment = [...carts.main];
              cloneCartPayment.splice(index, 1);
              dispatch(cartsAction.loadCartMain(cloneCartPayment));
            }
          }}
          checked={status}
        />
      </div>
      <div className="w-1/4 md:w-2/12 flex justify-center pb-1 md:p-3">
        <img
          src={cart.image.src}
          className="w-full md:w-11/12 sm:px-3 object-contain"
          alt=""
        />
      </div>
      <div className="w-2/4 md:w-7/12 flex justify-center flex-col md:flex-row">
        <InfoProductCart cart={cart} />
        <div className="w-full md:w-1/4 flex justify-center pb-1 md:p-3">
          <div className="flex items-center">
            <div>
              <input
                type="number"
                className="w-28 p-3 border-2 border-solid border-gray-300 
                  rounded-full text-center font-semibold dark:bg-dark-third dark:border-dark-third"
                min="1"
                value={cart.amount}
                onChange={(event) => {
                  let data = event.target.value;
                  if (data > 50) data = 50;
                  else if (data < 1) {
                    data = 1;
                  } else data = event.target.value;
                  dispatch(
                    cartsAction.changeAmountCartRequest(
                      {
                        amount: data,
                        idCart: cart.idCart,
                        user: user,
                        status: status,
                      },
                      headers
                    )
                  );
                  const index = carts.main.findIndex(
                    (item) => item.idCart === cart.idCart
                  );
                  if (index !== -1) {
                    let cloneCartPayment = [...carts.main];
                    cloneCartPayment[index].amount = data;
                    dispatch(cartsAction.loadCartMain(cloneCartPayment));
                  }
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
              onClick={() => {
                dispatch(
                  cartsAction.deleteCartRequest(
                    {
                      user: user,
                      idCart: cart.idCart,
                    },
                    headers
                  )
                );
                const index = carts.main.findIndex(
                  (item) => item.idCart === cart.idCart
                );
                if (index !== -1) {
                  let cloneCartPayment = [...carts.main];
                  cloneCartPayment.splice(index, 1);
                  dispatch(cartsAction.loadCartMain(cloneCartPayment));
                }
              }}
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
