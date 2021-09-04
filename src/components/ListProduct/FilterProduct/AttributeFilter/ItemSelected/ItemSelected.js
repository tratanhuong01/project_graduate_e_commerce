import React from "react";

function ItemSelected(props) {
  //
  const { item, onClick } = props;
  //
  return (
    <div
      onClick={() => onClick(item)}
      className={`border-2 m-1 border-solid border-organce px-3 py-1 rounded-lg font-semibold text-sm 
      mr-2`}
    >
      {item.name}
      <span className="bx bxs-x text-xl py-1 ml-1"></span>
    </div>
  );
}

export default ItemSelected;
