import React from "react";
import ItemPrice from "./ItemPrice/ItemPrice";
function Price(props) {
  return (
    <div className="w-full">
      <div className="w-full flex flex-wrap">
        <ItemPrice />
        <ItemPrice />
        <ItemPrice />
        <ItemPrice />
        <ItemPrice />
        <ItemPrice />
        <ItemPrice />
      </div>
      <input type="range" className="w-11/12 mx-auto my-2" />
    </div>
  );
}

export default Price;
