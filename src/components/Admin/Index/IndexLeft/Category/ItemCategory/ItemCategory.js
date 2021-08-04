import React from "react";

function ItemCategory(props) {
  //
  const { id, item, setCategoryCurrent } = props;
  //
  return (
    <li
      onClick={() => {
        setCategoryCurrent(item.id);
      }}
      className={`w-full border-solid font-semibold cursor-pointer flex pl-5 h-12 my-1 items-center rounded-lg
      hover:bg-gray-200 text-gray-700 ${
        item.id === id
          ? "border-l-4 border-blue-500 bg-gray-300"
          : "border-white"
      }`}
    >
      <span className={`${item.icon} text-2xl mr-3 flex items-center`}></span>
      <span className="flex items-center">{item.name}</span>
    </li>
  );
}

export default ItemCategory;
