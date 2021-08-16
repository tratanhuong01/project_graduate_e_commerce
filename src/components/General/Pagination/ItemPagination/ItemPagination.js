import React from "react";

function ItemPagination(props) {
  return (
    <ul className="flex justify-end items-center">
      <li
        className="w-10 h-10 rounded-full text-sm font-semibold border-2 m-0.5 cursor-pointer 
        border-solid border-gray-500 flex justify-center items-center"
      >
        0
      </li>
    </ul>
  );
}

export default ItemPagination;
