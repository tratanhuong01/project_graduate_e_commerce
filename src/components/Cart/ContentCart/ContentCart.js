import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";  
import ItemCartMain from "../ItemCartMain/ItemCartMain";

function ContentCart(props) {
  const { headers, carts } = useSelector((state) => {
    return {
      carts: state.carts,
      headers: state.headers,
    };
  });
  const check = (item) => {
    const index = carts.main.findIndex((data) => data.idCart === item.idCart);
    if (index !== -1) return true;
    return false;
  };
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
    <>
      {carts.list.map((cart, index) => {
        return (
          <ItemCartMain
            cart={cart}
            key={index}
            carts={carts}
            status={check(cart)}
            headers={headers}
          />
        );
      })}
    </>
  );
}

export default ContentCart;
