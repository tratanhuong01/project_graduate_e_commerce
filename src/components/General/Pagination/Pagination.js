import React from "react";
import ItemPagination from "./ItemPagination/ItemPagination";

function Pagination(props) {
  return (
    <ul className="flex justify-end items-center dark:text-white">
      <li
        className="w-10 h-10 rounded-full text-sm font-semibold border-2 m-0.5 cursor-pointer 
            border-solid border-gray-500 flex justify-center items-center"
      >
        <i className="bx bxs-chevrons-left"></i>
      </li>
      <ItemPagination />
      <ItemPagination />
      <ItemPagination />
      <ItemPagination />
      <li
        className="w-10 h-10 rounded-full text-sm font-semibold border-2 m-0.5 cursor-pointer 
            border-solid border-gray-500 flex justify-center items-center"
      >
        <i className="bx bxs-chevrons-right"></i>
      </li>
    </ul>
  );
}

export default Pagination;
