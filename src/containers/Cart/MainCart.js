import React from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import Rule from "../../containers/General/Rule";
import ReciveInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import HeaderNormal from "../../components/Header/HeaderNormal/HeaderNormal";
import TitleCart from "../../components/Cart/TitleCart/TitleCart";
import ItemCartMain from "../../components/Cart/ItemCartMain/ItemCartMain";
import EndCart from "../../components/Cart/EndCart/EndCart";
import { useSelector } from "react-redux";

function MainCart(props) {
  //
  const states = useSelector((state) => {
    return {
      carts: state.carts,
    };
  });
  const { carts } = states;
  let sumMoney = 0;
  const showItemCartMain = carts.map((item, index) => {
    sumMoney +=
      item.product.Price.Price *
      ((100 - item.product.Price.Sale) / 100) *
      item.cart.NumberChoose;
    return <ItemCartMain item={item} key={index} />;
  });
  return (
    <div className="w-full">
      <div className="w-full relative text-white md:text-black">
        <HeaderNormal />
      </div>
      <div className="w-full bg-gray-100">
        <LevelUrl />
        <hr className="my-2"></hr>
        <div className="w-full xl:w-4/5 mx-auto p-4">
          <div className="w-full mx-auto mt-5 mb-2">
            <p className="mb-3 text-2xl font-semibold">Giỏ hàng</p>
            <TitleCart />
            {showItemCartMain}
            <EndCart sumMoney={sumMoney} />
          </div>
        </div>
        <Rule />
        <ReciveInfo />
        <EndFooter />
      </div>
    </div>
  );
}

export default MainCart;
