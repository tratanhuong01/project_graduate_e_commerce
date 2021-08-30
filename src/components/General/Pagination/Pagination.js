import React from "react";
import ItemPagination from "./ItemPagination/ItemPagination";

function Pagination(props) {
  //
  const { index, length, dispatch, limit } = props;
  let array = [];
  for (let index = 0; index < Math.ceil(length / limit); index++)
    array.push(index);
  //
  return (
    <ul className="flex justify-end items-center dark:text-white">
      <li
        onClick={() => {
          if (index === 0) return;
          dispatch(index - 1);
        }}
        className={`w-10 h-10 rounded-full text-sm font-semibold border-2 m-0.5
      border-solid border-gray-500 flex justify-center items-center ${
        index === 0 ? "opacity-50 cursor-not-allowed" : " cursor-pointer "
      }`}
      >
        <i className="bx bxs-chevrons-left"></i>
      </li>
      {array.map((item, pos) => {
        return (
          <ItemPagination
            key={pos}
            item={item}
            index={pos}
            indexCurrent={index}
            dispatch={dispatch}
          />
        );
      })}
      <li
        onClick={() => {
          if (index === Math.ceil(length / limit) - 1 || length === 0) return;
          dispatch(index + 1);
        }}
        className={`w-10 h-10 rounded-full text-sm font-semibold border-2 m-0.5
      border-solid border-gray-500 flex justify-center items-center ${
        index === Math.ceil(length / limit) - 1 || length === 0
          ? "opacity-50 cursor-not-allowed"
          : " cursor-pointer "
      }`}
      >
        <i className="bx bxs-chevrons-right"></i>
      </li>
    </ul>
  );
}

export default Pagination;
