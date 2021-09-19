import React from "react";
import ItemImageChildTopSell from "./ItemImageChildTopSell/ItemImageChildTopSell";

function ImageChildTopSell(props) {
  //
  const { image, setImage, products } = props;
  //
  return (
    <div className="w-7/12 mx-auto p-4 flex justify-center">
      <div className="flex justify-center">
        <span className="flex items-center cursor-pointer">
          <i className="bx bxs-left-arrow-alt text-4xl text-gray-500"></i>
        </span>
      </div>
      <ul className="flex justify-center">
        {products.imageList.map((item, index) => {
          return (
            <ItemImageChildTopSell
              key={index}
              item={item}
              image={image}
              setImage={setImage}
            />
          );
        })}
      </ul>
      <div className="flex justify-center">
        <span className="flex items-center cursor-pointer">
          <i className="bx bxs-right-arrow-alt text-4xl text-gray-500"></i>
        </span>
      </div>
    </div>
  );
}

export default ImageChildTopSell;
