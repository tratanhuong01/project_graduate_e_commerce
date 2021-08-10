import React from "react";

function ItemNumberStar(props) {
  //
  const { current, content } = props;
  //
  return (
    <button
      className={`px-6 m-1 py-2 rounded-lg border-2 border-solid 
      ${
        current === true
          ? "border-organce text-organce font-semibold"
          : "border-gray-300 font-semibold text-gray-700"
      }`}
    >
      {content}
    </button>
  );
}

export default ItemNumberStar;
