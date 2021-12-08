import React, { useEffect, useState } from "react";
import ItemProductViewLeft from "../ProductViewLeft/ItemProductViewLeft/ItemProductViewLeft";
// import Zoom from "react-medium-image-zoom";
// import "react-medium-image-zoom/dist/styles.css";
import ScrollContainer from "react-indiana-drag-scroll";
import api from "../../../../Utils/api";

function ProductViewLeft(props) {
  //
  const { imageData, setImageData, products } = props;
  const [images, setImages] = useState([]);
  useEffect(() => {
    //
    let unmounted = false;
    const fetch = async () => {
      const result = await api(`getImageByIdLineProduct?idLineProduct=${products.idLineProduct}`, 'GET', null, {});
      if (unmounted) return;
      setImages(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    }
    //
  }, [products.idLineProduct]);
  //
  return (
    <div
      className="w-full xl:w-7/12 flex"
      style={{ maxHeight: 580, height: 580 }}
    >
      <ul className="w-2/12">
        <li className="text-center cursor-pointer">
          <i className="bx bx-caret-up text-2xl text-gray-700 dark:text-gray-300"></i>
        </li>
        <ScrollContainer
          className="w-full scrollbar-css"
          style={{ maxHeight: "calc(100% - 50px)" }}
        >
          {images.map((image, index) => {
            return (
              <ItemProductViewLeft
                image={image}
                key={index}
                imageData={imageData}
                setImageData={setImageData}
              />
            );
          })}
        </ScrollContainer>
        <li className="text-center cursor-pointer">
          <i className="bx bx-caret-down text-2xl text-gray-700 dark:text-gray-300"></i>
        </li>
      </ul>
      <div className="w-10/12 pr-4 relative">
        <div className="w-full flex items-center absolute top-1/2 left-0 transform -translate-y-1/2">
          {/* <Zoom> */}
          <img
            src={imageData.src}
            alt=""
            className="w-full object-contain"
            style={{ maxHeight: 560 }}
          />
          {/* </Zoom> */}
        </div>
      </div>
    </div>
  );
}

export default ProductViewLeft;
