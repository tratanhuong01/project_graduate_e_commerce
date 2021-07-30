import React from "react";
import ColorProduct from "./ColorProduct/ColorProduct";
import DescribeChild from "./DescribeChild/DescribeChild";
import SizeProduct from "./SizeProduct/SizeProduct";

function ProductViewRight(props) {
  return (
    <div className="w-full xl:w-5/12">
      <div className="w-full flex mb-2">
        <div className="w-full pl-4 pt-1">
          <p className="text-2xl font-semibold cursor-pointer hover:text-organce mb-3">
            {"product.NameProduct"}
          </p>
          <DescribeChild />
          <ColorProduct />
          <SizeProduct />
          <div className="w-full my-3 flex ">
            <div
              className="flex w-32 rounded-full border-2 border-solid 
                border-gray-200"
            >
              <span className="w-1/4 py-3.5 text-center cursor-pointer">
                <i className="bx bx-minus color-black"></i>
              </span>
              <input
                type="text"
                name="number"
                className="w-1/2 py-3.5 text-center font-semibold"
              />
              <span className="w-1/4 text-center py-3.5 cursor-pointer">
                <i className="bx bx-plus"></i>
              </span>
            </div>
            <button
              type="button"
              className="px-10 py-3.5 rounded-full shadow-lg bg-organce 
                font-semibold text-sm font-semibold flex items-center text-white border-2 
                border-solid border-2 border-gray-100 ml-10 * hover:border-orangce"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductViewRight;
