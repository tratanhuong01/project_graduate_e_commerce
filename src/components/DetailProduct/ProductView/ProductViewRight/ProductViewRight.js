import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorProduct from "./ColorProduct/ColorProduct";
import DescribeChild from "./DescribeChild/DescribeChild";
import MemoryProduct from "./MemoryProduct/MemoryProduct";
import * as productsAction from "../../../../actions/product/index";

function ProductViewRight(props) {
  //
  const { products, imageData } = props;
  const dispatch = useDispatch();
  const states = useSelector((state) => {
    return {
      product: state.product,
    };
  });
  const { product } = states;
  const [number, setNumber] = useState(1);
  //
  return (
    <div className="w-full xl:w-5/12">
      <div className="w-full flex mb-2">
        <div className="w-full pl-4 pt-1">
          <p className="text-2xl font-semibold cursor-pointer hover:text-organce mb-3">
            {`${products.nameLineProduct} ${
              products.memory === null ? "" : products.memory.nameMemory
            } ${
              products.color === null ? "" : `Màu ${products.color.description}`
            }`}
          </p>
          <DescribeChild products={products} />
          {products.colorList.length > 0 && (
            <ColorProduct
              colors={products.colorList}
              colorData={products.color}
              images={products.imageList}
              imageData={imageData}
              products={products}
            />
          )}
          {products.memoryList.length > 0 && (
            <MemoryProduct
              memories={products.memoryList}
              memory={products.memory}
              products={products}
            />
          )}

          <div className="w-full my-3 flex ">
            <div
              className="flex w-32 rounded-full border-2 border-solid 
                border-gray-200"
            >
              <span
                onClick={() => {
                  setNumber(number - 1 === 0 ? 1 : number - 1);
                  dispatch(
                    productsAction.changeAmountProductChoose(
                      product.typeDisplay,
                      number - 1 === 0 ? 1 : number - 1
                    )
                  );
                }}
                className="w-1/4 py-3.5 text-center cursor-pointer"
              >
                <i className="bx bx-minus color-black"></i>
              </span>
              <input
                type="number"
                name="number"
                value={number}
                min={1}
                max={30}
                className="w-1/2 py-3.5 text-center font-semibold"
                onChange={(event) => {
                  setNumber(event.target.value);
                  dispatch(
                    productsAction.changeAmountProductChoose(
                      product.typeDisplay,
                      event.target.value
                    )
                  );
                }}
              />
              <span
                onClick={() => {
                  setNumber(number + 1);
                  dispatch(
                    productsAction.changeAmountProductChoose(
                      product.typeDisplay,
                      number + 1
                    )
                  );
                }}
                className="w-1/4 text-center py-3.5 cursor-pointer"
              >
                <i className="bx bx-plus"></i>
              </span>
            </div>
            <button
              onClick={() => console.log(product)}
              type="button"
              className="px-10 py-3.5 rounded-full shadow-lg-organce bg-organce 
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
