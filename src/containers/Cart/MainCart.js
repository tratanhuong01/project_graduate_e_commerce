import React, { useEffect } from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
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

  const sum = () => {
    let sum = 0;
    carts.forEach((element) => {
      sum +=
        element.priceOutput * ((100 - element.sale) / 100) * element.amount;
    });
    return sum;
  };

  const sumMoney = sum();

  useEffect(() => {}, [carts]);

  //
  return (
    <div className="w-full bg-gray-100">
      <LevelUrl />
      <hr className="my-2"></hr>
      <div className="w-full xl:w-4/5 mx-auto p-4">
        <div className="w-full mx-auto mt-5 mb-2">
          <p className="mb-3 text-2xl font-semibold">Giỏ hàng</p>
          <TitleCart />
          {carts.map((cart, index) => {
            return <ItemCartMain cart={cart} key={index} />;
          })}
          <EndCart sumMoney={sumMoney} />
        </div>
      </div>
    </div>
  );
}

export default MainCart;
