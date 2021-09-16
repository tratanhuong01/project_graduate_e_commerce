import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorProduct from "./ColorProduct/ColorProduct";
import DescribeChild from "./DescribeChild/DescribeChild";
import MemoryProduct from "./MemoryProduct/MemoryProduct";
import * as productsAction from "../../../../actions/product/index";
import * as cartsAction from "../../../../actions/cart/index";
import WishListStatus from "./WishListStatus/WishListStatus";
// import PromotionGift from "./PromotionGift/PromotionGift";

function ProductViewRight(props) {
  //
  const { products, imageData } = props;
  const dispatch = useDispatch();
  const states = useSelector((state) => {
    return {
      product: state.product,
      user: state.user,
    };
  });
  const { product, user } = states;
  const [number, setNumber] = useState(1);
  //
  return (
    <div className="w-full xl:w-5/12">
      <div className="w-full flex mb-2">
        <div className="w-full pl-4 pt-1 relative">
          <WishListStatus user={user} idProduct={products.idProduct} />
          <p className="text-2xl font-semibold cursor-pointer hover:text-organce mb-3">
            {`${products.nameLineProduct} ${
              products.memory === null ? "" : products.memory.nameMemory
            } ${
              products.color === null ? "" : `Màu ${products.color.description}`
            }`}
          </p>
          <DescribeChild
            products={products}
            typeDisplay={product.typeDisplay}
          />
          {products.itemCurrent === 0 && (
            <p
              className="text-white bg-red-500 font-semibold py-1 px-2 my-6 rounded-full border-2 border-solid 
            border-red-500 w-64 text-center "
            >
              Sản phẩm hiện tại đã hết hàng
            </p>
          )}
          {/* <PromotionGift /> */}
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
          <div className="w-full my-2 hidden">
            <div
              className="w-full rounded-full p-1 mx-2 bg-white hover:bg-organce hover:text-white 
            border-2 border-solid border-organce hover:border-white font-semibold flex flex-col 
            items-center cursor-pointer"
            >
              <p className="mb-1">Mua ngay</p>
              <p className="text-xs">Giao hàng tận nơi</p>
            </div>
            <div
              className="w-full mt-3 rounded-full p-1 mx-2 bg-white hover:bg-organce hover:text-white 
            border-2 border-solid border-organce hover:border-white font-semibold flex flex-col items-center"
            >
              <p className="mb-1">Mua ngay</p>
              <p className="text-xs">Visa,Master,JCB</p>
            </div>
          </div>
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
                type="text"
                name="number"
                value={number}
                min={1}
                max={30}
                className="w-1/2 py-3.5 text-center font-semibold dark:bg-dark-second"
                onChange={(event) => {
                  setNumber(event.target.value);
                  dispatch(
                    productsAction.changeAmountProductChoose(
                      product.typeDisplay,
                      event.target.value
                    )
                  );
                }}
                disabled={true}
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
              onClick={() =>
                dispatch(
                  cartsAction.addCartRequest({
                    user: user,
                    amount: number,
                    idProduct:
                      product.typeDisplay === 0
                        ? product.view.idProduct
                        : product.modal.idProduct,
                  })
                )
              }
              type="button"
              className="px-10 py-3.5 rounded-full shadow-lg-organce bg-organce 
                font-semibold text-smflex items-center text-white border-2 
                border-solid border-gray-100 ml-10 * hover:border-orangce"
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
