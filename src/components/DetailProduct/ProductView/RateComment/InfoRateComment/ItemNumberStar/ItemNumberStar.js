import React from "react";

function ItemNumberStar(props) {
  //
  const { active, star, onClick } = props;
  //
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={`px-6 m-1 py-2 rounded-lg border-2 border-solid 
      ${
        star.star === active
          ? "border-organce text-organce font-semibold"
          : "border-gray-300 dark:text-white font-semibold text-gray-700"
      }`}
    >
      {star.name}
    </button>
  );
}

export default ItemNumberStar;
