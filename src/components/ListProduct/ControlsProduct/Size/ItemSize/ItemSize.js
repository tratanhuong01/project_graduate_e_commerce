import React from "react";

function ItemSize(props) {
  return (
    <li
      className={
        `${
          "this.props.size" === "this.props.item"
            ? " text-organce border-organce "
            : " border-white "
        }` +
        `w-10 h-10 m-2 bg-white flex justify-center border-2 border-solid 
        hover:text-organce cursor-pointer hover:border-organce`
      }
    >
      <span className="flex items-center font-semibold">44</span>
    </li>
  );
}

export default ItemSize;
