import React from "react";

function ItemSelected(props) {
  //
  const { item, onClick } = props;
  //
  return (
    <div
      onClick={() => onClick(item)}
      className={`border-2 h-8 py-0.5 flex items-center border-solid border-organce px-2 rounded-lg font-semibold text-sm  mr-3`}
    >
      {item.name}
      <span className="bx bxs-x text-xl py-1 ml-1"></span>
    </div>
  );
}

export default ItemSelected;
