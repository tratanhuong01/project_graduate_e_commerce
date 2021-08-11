import React from "react";

function ItemProductViewLeft(props) {
  //
  const { image, imageData, setImageData } = props;
  //
  return (
    <li onClick={() => setImageData(image)} className="w-full p-3">
      <img
        src={image.src}
        className={`w-full border-2 border-solid ${
          imageData.id === image.id ? "border-orangce" : "hover:border-organce"
        } cursor-pointer 
         `}
        alt=""
      />
    </li>
  );
}

export default ItemProductViewLeft;
