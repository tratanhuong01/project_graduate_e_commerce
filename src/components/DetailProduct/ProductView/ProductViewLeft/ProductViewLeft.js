import React from "react";
import ItemProductViewLeft from "../ProductViewLeft/ItemProductViewLeft/ItemProductViewLeft";
// import Zoom from "react-medium-image-zoom";
// import "react-medium-image-zoom/dist/styles.css";
import ScrollContainer from "react-indiana-drag-scroll";

function ProductViewLeft(props) {
  //
  const { products, imageData, setImageData } = props;
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
          {products.imageList.map((image, index) => {
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
