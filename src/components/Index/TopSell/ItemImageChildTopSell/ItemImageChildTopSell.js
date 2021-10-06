import React from "react";

function ItemImageChildTopSell(props) {
  //
  const { image, item, setImage } = props;
  //
  return (
    <li className="w-36 h-36 p-2">
      <img
        onClick={() => setImage(item)}
        src={item.src}
        className={`w-full p-1 cursor-pointer border-2 border-solid 
        ${
          image.id !== item.id
            ? "border-gray-300 dark:border-dark-second"
            : "hover:border-gray-300 dark:hover:border-dark-second border-white"
        }`}
        alt=""
      />
    </li>
  );
}

export default ItemImageChildTopSell;
