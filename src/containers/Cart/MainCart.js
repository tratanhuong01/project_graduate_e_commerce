import React, { useEffect } from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import TitleCart from "../../components/Cart/TitleCart/TitleCart";
import ItemCartMain from "../../components/Cart/ItemCartMain/ItemCartMain";
import EndCart from "../../components/Cart/EndCart/EndCart";
import * as cartsAction from "../../actions/cart/index";

import { useDispatch, useSelector } from "react-redux";
function MainCart(props) {
  //
  const states = useSelector((state) => {
    return {
      carts: state.carts,
      user: state.user,
    };
  });
  const { carts, user } = states;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartsAction.loadMoneyCart(carts.main));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carts.main]);
  useEffect(() => {
    dispatch(cartsAction.loadCartMain([]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const check = (item) => {
    const index = carts.main.findIndex((data) => data.idCart === item.idCart);
    if (index !== -1) return true;
    return false;
  };
  //
  return (
    <div className="w-full bg-gray-100 dark:bg-dark-second dark:text-white">
      <LevelUrl />
      <hr className="my-2"></hr>
      <div className="w-full xl:w-4/5 mx-auto p-4">
        <div className="w-full mx-auto mt-5 mb-2">
          <p className="mb-3 text-2xl font-semibold">Giỏ hàng</p>
          <TitleCart carts={carts} />
          {carts.list.map((cart, index) => {
            return (
              <ItemCartMain
                cart={cart}
                key={index}
                carts={carts}
                status={check(cart)}
              />
            );
          })}
          <EndCart sumMoney={carts.money} carts={carts} />
        </div>
      </div>
    </div>
  );
}

export default MainCart;
