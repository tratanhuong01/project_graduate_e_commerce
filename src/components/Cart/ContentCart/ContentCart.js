import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemCartMain from "../ItemCartMain/ItemCartMain";

function ContentCart(props) {
  const carts = useSelector((state) => state.carts);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  return loading ? (
    <div className="w-full p-3 flex items-center justify-center h-56">
      <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
    </div>
  ) : (
    carts.list.map((cart, index) => {
      return (
        <ItemCartMain
          cart={cart}
          key={index}
          carts={carts}
          status={
            carts.main.filter((dt) => dt.idCart === cart.idCart).length > 0
          }
        />
      );
    })
  );
}

export default ContentCart;
