import React from "react";
import { useSelector } from "react-redux";
import ItemPrice from "./ItemPrice/ItemPrice";

function Price(props) {
  //
  const { setIndex } = props;
  const listProduct = useSelector((state) => state.listProduct);
  const prices = [
    {
      id: -1,
      name: "Dưới 200.000 đ",
      from: 0,
      to: 200000,
    },
    {
      id: 0,
      name: "200.000 đ - 500.000 đ",
      from: 200000,
      to: 500000,
    },
    {
      id: 1,
      name: "500.000 đ - 1.000.000 đ",
      from: 500000,
      to: 1000000,
    },
    {
      id: 2,
      name: "1.000.000 đ - 2.000.000 đ",
      from: 1000000,
      to: 2000000,
    },
    {
      id: 2,
      name: "1.000.000 đ - 2.000.000 đ",
      from: 1000000,
      to: 2000000,
    },
    {
      id: 3,
      name: "2.000.000 đ - 5.000.000 đ",
      from: 2000000,
      to: 5000000,
    },
    {
      id: 4,
      name: "5.000.000 đ - 10.000.000 đ",
      from: 5000000,
      to: 10000000,
    },
    {
      id: 4,
      name: "10.000.000 đ - 20.000.000 đ",
      from: 10000000,
      to: 20000000,
    },
    {
      id: 5,
      name: "20.000.000 đ - 30.000.000 đ",
      from: 20000000,
      to: 30000000,
    },
    {
      id: 4,
      name: "Hơn 30.000.000 đ",
      from: 30000000,
      to: 100000000,
    },
  ];
  //
  return (
    <div className="w-full">
      <div className="w-full flex flex-wrap">
        {prices.map((price, index) => {
          const state = listProduct.filters.findIndex(
            (dt) => dt.id === price.id && dt.name === price.name
          );
          return (
            <ItemPrice
              price={price}
              key={index}
              setIndex={setIndex}
              listProduct={listProduct}
              state={state}
            />
          );
        })}
      </div>
      <input type="range" className="w-11/12 mx-auto my-2" />
    </div>
  );
}

export default Price;
