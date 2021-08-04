import React from "react";

function ItemDashboarEveryDay(props) {
  return (
    <li className="w-1/4 mr-6 bg-yellow-500 text-white p-5 flex">
      <div className="text-center w-1/4 items-center">
        <i className="fas fa-users text-2xl my-2"></i>
      </div>
      <div className="w-3/4 text-center px-2 items-center font-bold">
        <p>Lượt đăng kí</p>
        <p>0</p>
      </div>
    </li>
  );
}

export default ItemDashboarEveryDay;
