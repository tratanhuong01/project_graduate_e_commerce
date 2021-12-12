import React, { useState } from "react";
import ItemImageChildTopSell from "./ItemImageChildTopSell/ItemImageChildTopSell";

function ImageChildTopSell(props) {
  //
  const [index, setIndex] = useState(0);
  const { image, setImage, images } = props;
  //
  return (
    <div className="w-7/12 mx-auto p-4 flex justify-center">
      <div className="flex justify-center">
        {images.length !== 1 || index !== 0 ? <span onClick={() => {
          setIndex(index - 1);
          setImage(images[index - 1]);
        }} className="flex items-center cursor-pointer">
          <i className="bx bxs-left-arrow-alt text-4xl text-gray-500"></i>
        </span> : ""}
      </div>
      <ul className="flex justify-center">
        {images.map((item, index) => {
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
        {index >= images.length && <span onClick={() => {
          setIndex(index + 1);
          setImage(images[index + 1]);
        }} className="flex items-center cursor-pointer">
          <i className="bx bxs-right-arrow-alt text-4xl text-gray-500"></i>
        </span>}
      </div>
    </div>
  );
}

export default ImageChildTopSell;
