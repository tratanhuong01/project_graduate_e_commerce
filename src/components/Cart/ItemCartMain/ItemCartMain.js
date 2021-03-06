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
    <div className="w-full my-3 py-2 lg:py-0 mb-5 flex bg-white dark:bg-dark-second dark:text-white lg:h-36">
      <div className="w-10 flex justify-center px-3 relative">
        <input
          type="checkbox"
          className="transform scale-125 absolute top-1/2 left-2"
          onChange={(event) => {
            if (event.target.checked)
              dispatch(cartsAction.loadCartMain([...carts.main, cart]));
            else {
              dispatch(
                cartsAction.loadCartMain(
                  carts.main.filter((item) => item.idCart !== cart.idCart)
                )
              );
            }
          }}
          checked={status}
        />
      </div>
      <div className="w-1/4 md:w-2/12 flex justify-center pb-1 md:p-3 items-center">
        <img
          src={cart.image.src}
          className="w-full md:w-11/12 sm:px-3 h-28 lg:h-36 object-contain"
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
                value={cart.amount}
                onChange={(event) => {
                  let data = event.target.value;
                  if (data > 50) data = 50;
                  if (data < 1) data = 1;
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
            <div>
              <p className="mb-2 font-semibold md:hidden text-center">
                T???ng ti???n
              </p>
              <p
                className="mb-2 text-gray-700 dark:text-white text-base text-organce text-center 
                  cursor-pointer"
              >
                {new Intl.NumberFormat("ban", "id").format(
                  cart.priceOutput * ((100 - cart.sale) / 100) * cart.amount
                )}{" "}
                <u>??</u>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center pb-1 md:p-3">
          <div className="flex items-center">
            <i
              onClick={() =>
                dispatch(
                  cartsAction.deleteCartRequest(
                    {
                      user: user,
                      idCart: cart.idCart,
                      carts: carts.main.filter(
                        (item) => item.idCart !== cart.idCart
                      ),
                    },
                    headers
                  )
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
