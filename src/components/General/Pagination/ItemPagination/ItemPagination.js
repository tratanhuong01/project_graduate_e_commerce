import React from "react";

function ItemPagination(props) {
  //
  const { index, indexCurrent, dispatch } = props;
  //
  return (
    <li
      onClick={() => {
        dispatch(index);
      }}
      className={`w-10 h-10 rounded-full text-sm font-semibold border-2 m-0.5 cursor-pointer 
        border-solid ${
          index === indexCurrent
            ? "border-organce text-organce"
            : "border-gray-500"
        } flex justify-center items-center`}
    >
      {index}
    </li>
  );
}

export default ItemPagination;
