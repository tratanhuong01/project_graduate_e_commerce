import React from "react";
import PopupItemAttributeFilter from "./PopupItemAttributeFilter/PopupItemAttributeFilter";

function ItemAttributeFilter(props) {
  //
  const { name, index, indexCurrent, onClick } = props;
  //
  return (
    <div
      className="mx-2 px-2 mb-2 py-2 rounded-full flex items-center relative border-2 border-solid z-50
      border-gray-300 cursor-pointer hover:bg-gray-100 text-gray-800 font-semibold relative"
    >
      <span
        onClick={() => {
          if (index === indexCurrent) onClick(-1);
          else onClick(index);
        }}
        className="flex ml-1"
      >
        {name}
        <i className="bx bx-chevron-down ml-1 mt-1 text-xl"></i>
      </span>
      {index === indexCurrent && (
        <PopupItemAttributeFilter>{props.children}</PopupItemAttributeFilter>
      )}
    </div>
  );
}

export default ItemAttributeFilter;
