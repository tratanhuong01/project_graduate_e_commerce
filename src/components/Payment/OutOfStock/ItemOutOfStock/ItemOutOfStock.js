import React from "react";

function ItemOutOfStock(props) {
  //
  const { order } = props;
  //
  return (
    <div className="w-full py-1 flex">
      <div className="w-4/5 flex items-center">
        <img
          src={order.item.image.src}
          alt=""
          className="w-20 h-20 p-1 rounded-md"
        />
        <div className="">
          <p className="font-semibold mb-1 pl-6 cursor-pointer">
            {order.item.nameLineProduct}
          </p>
        </div>
      </div>
      <div className="w-1/5 justify-end flex items-center text-gray-600 font-semibold dark:text-gray-300">
        {order.item.amount}
        <i className="bx bx-right-arrow-alt mx-1"></i>
        {order.itemCurrent}
      </div>
    </div>
  );
}

export default ItemOutOfStock;
