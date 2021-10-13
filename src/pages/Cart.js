import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useResetPage from "../hook/useResetPage";
import * as cartsAction from "../actions/cart/index";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LevelUrl from "../components/General/LevelUrl/LevelUrl";
import { PAGE_CART } from "../constants/Config";
import ContentCart from "../components/Cart/ContentCart/ContentCart";
import EndCart from "../components/Cart/EndCart/EndCart";
import TitleCart from "../components/Cart/TitleCart/TitleCart";

function Cart(props) {
  //
  useResetPage("Giỏ hàng");
  const { carts, user } = useSelector((state) => {
    return {
      carts: state.carts,
      user: state.user,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartsAction.loadMoneyCart(carts.main));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carts.main]);
  useEffect(() => {
    dispatch(cartsAction.loadCartMain([]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  //
  return (
    <div className="w-full bg-gray-100 dark:bg-dark-second dark:text-white">
      <BreadcrumbsItem to={PAGE_CART}>Giỏ hàng</BreadcrumbsItem>
      <LevelUrl />
      <hr className="my-2 dark:border-dark-third"></hr>
      <div className="w-full xl:w-4/5 mx-auto mt-5 p-4 mb-2">
        <p className="mb-3 text-2xl font-semibold">Giỏ hàng</p>
        <TitleCart carts={carts} />
        {carts.list.length <= 0 ? (
          <div className="w-full p-3 flex items-center justify-center h-32 text-gray-600 dark:text-white">
            Không có bất kì sản phẩm nào trong giỏ hàng
          </div>
        ) : (
          <ContentCart />
        )}
        <EndCart sumMoney={carts.money} carts={carts} />
      </div>
    </div>
  );
}

export default Cart;
