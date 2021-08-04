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
      className={`w-full border-solid font-semibold cursor-pointer flex pl-5 py-2 my-1 items-center rounded-lg
      hover:bg-gray-200 text-gray-700 ${
        item.id === id
          ? "border-l-4 border-blue-500 bg-gray-300"
          : "border-white"
      }`}
    >
      <i className={`${item.icon} text-2xl mr-3`}></i>
      {item.name}
    </li>
  );
}

export default ItemCategory;
