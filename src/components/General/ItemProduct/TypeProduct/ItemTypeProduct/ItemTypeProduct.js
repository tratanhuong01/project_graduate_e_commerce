import React from "react";

function ItemTypeProduct(props) {
  //
  const { onMouseLeaves, onMouseEnters, index, numberIndex, image } = props;
  //
  return (
    <li
      onMouseEnter={() => onMouseEnters(image.Url)}
      onMouseLeave={() => onMouseLeaves(image.Url)}
      className={`w-1/3 p-1 ${
        index === numberIndex ? "border-gray-300" : "hover:border-gray-300"
      } border-2 border-white border-solid`}
    >
      <img
        src={image.Url}
        className="w-full p-2 cursor-pointer 
          object-cover"
        alt=""
      ></img>
    </li>
  );
}

export default ItemTypeProduct;
