import React from "react";

function ItemStatusBill(props) {
  //
  const { active, item, onClick } = props;
  //
  return (
    <div
      onClick={() => onClick(item)}
      style={{ width: "calc(100% / 6)" }}
      className={`flex items-center justify-center pb-3 cursor-pointer font-semibold border-b-2 border-solid lg:px-1 xl:px-4 mx-1 text-sm lg:text-xm ${
        active
          ? " text-organce border-organce"
          : ` text-gray-800  dark:text-white  hover:border-organce hover:text-organce border-white 
          dark:border-dark-second`
      }`}
    >
      {item.name}
    </div>
  );
}

export default ItemStatusBill;
