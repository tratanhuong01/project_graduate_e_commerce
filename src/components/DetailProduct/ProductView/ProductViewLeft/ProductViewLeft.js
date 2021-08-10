import React from "react";
import ItemProductViewLeft from "../ProductViewLeft/ItemProductViewLeft/ItemProductViewLeft";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ScrollContainer from "react-indiana-drag-scroll";

function ProductViewLeft(props) {
  return (
    <div className="w-full xl:w-7/12 flex" style={{ maxHeight: 580 }}>
      <ul className="w-2/12">
        <li className="text-center cursor-pointer">
          <i className="bx bx-caret-up text-2xl text-gray-700"></i>
        </li>
        <ScrollContainer
          className="w-full scrollbar-css"
          style={{ maxHeight: "calc(100% - 50px)" }}
        >
          <ItemProductViewLeft />
          <ItemProductViewLeft />
          <ItemProductViewLeft />
          <ItemProductViewLeft />
        </ScrollContainer>
        <li className="text-center cursor-pointer">
          <i className="bx bx-caret-down text-2xl text-gray-700"></i>
        </li>
      </ul>
      <div className="w-10/12 pr-4">
        <div className="w-full border-2 border-gray-200 border-solid">
          <Zoom>
            <img
              src={
                "https://didongviet.vn/pub/media/catalog/product//g/a/galaxy-fold3-didongviet.jpg"
              }
              alt=""
              className="w-full cursor-pointer"
              style={{ maxHeight: 560 }}
            />
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default ProductViewLeft;
