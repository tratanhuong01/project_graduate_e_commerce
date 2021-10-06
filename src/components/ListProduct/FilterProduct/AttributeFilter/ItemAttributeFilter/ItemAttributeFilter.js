import React from "react";
import PopupItemAttributeFilter from "./PopupItemAttributeFilter/PopupItemAttributeFilter";

function ItemAttributeFilter(props) {
  //
  const { name, index, indexCurrent, onClick, slug } = props;
  //
  return (
    <div
      className={`mx-2 px-2 mb-2 py-0.5 rounded flex items-center relative border-2 border-solid
      shadow-sm cursor-pointer border-gray-300 zIndex__${index} ${
        index === indexCurrent ? "bg-gray-100" : "hover:bg-gray-100"
      } text-gray-800`}
    >
      <div
        onClick={() => {
          if (index === indexCurrent) onClick(-1);
          else onClick(index);
        }}
        className="flex ml-1 items-center"
      >
        {name}
        <i className="bx bx-chevron-down ml-1 mt-1 text-xl"></i>
      </div>
      {index === indexCurrent && (
        <PopupItemAttributeFilter slug={slug} index={index}>
          {props.children}
        </PopupItemAttributeFilter>
      )}
    </div>
  );
}

export default ItemAttributeFilter;
