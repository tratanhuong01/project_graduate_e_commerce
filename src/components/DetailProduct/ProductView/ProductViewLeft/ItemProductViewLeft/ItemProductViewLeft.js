import React from "react";

function ItemProductViewLeft(props) {
  //
  const { image, imageCurrent } = props;
  //
  return (
    <li className="w-full p-3">
      <img
        src={image.src}
        className={`w-full border-2 border-solid ${
          image.src === imageCurrent ? "border-orangce" : "hover:border-organce"
        } cursor-pointer 
         `}
        alt=""
      />
    </li>
  );
}

export default ItemProductViewLeft;
