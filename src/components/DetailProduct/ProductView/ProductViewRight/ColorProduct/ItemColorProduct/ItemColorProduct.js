import React from "react";

function ItemColorProduct(props) {
  //
  const { color, colorCurrent, image } = props;
  //
  return (
    <div className="w-20 h-20 p-1 m-1 relative image-color flex-shrink-0">
      <div
        className="px-4 py-2 bg-organce font-semibold absolute -top-12 
        left-0 text-white text-xm color z-50"
      >
        {color.description}
      </div>
      <img
        src={image.src}
        className={`w-16 h-16 border-2 border-solid cursor-pointer object-cover image-color 
        ${
          color.code === colorCurrent
            ? "border-organce"
            : "border-gray-300 hover:border-organce"
        }`}
        alt=""
      />
    </div>
  );
}

export default ItemColorProduct;
