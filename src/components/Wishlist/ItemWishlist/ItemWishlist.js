import React from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../constants/Config";

function ItemWishlist(props) {
  //
  const { wishList } = props;
  //
  return (
    <div className="w-full bg-white flex">
      <div
        className="w-1/2 flex justify-center border-2 border-solid border-gray-100 
        p-3  text-gray-800"
      >
        <div className="w-full flex items-center">
          <img
            src={wishList.image.src}
            alt=""
            className="w-20 h-20 md:w-28 md:h-28 rounded-lg object-cover"
          />
          <div className="w-9/12 flex items-center justify-start flex-col pl-3">
            <Link
              to={`${Config.PAGE_DETAIL_PRODUCT}/${wishList.slug}`}
              className="font-semibold mb-1.5 hover:text-organce"
            >
              {wishList.nameLineProduct}
            </Link>
            {wishList.color && (
              <p className="font-semibold mb-1.5">
                Màu : {wishList.color.description}
              </p>
            )}
            {wishList.memory && (
              <p className="font-semibold mb-1.5">
                Bộ nhớ : {wishList.memory.nameMemory}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <div
          className="w-3/5 md:w-2/5 flex justify-center items-center border-2 border-solid border-gray-100 
        p-3"
        >
          <span className="flex font-semibold text-gray-800">1.450.000 đ</span>
        </div>
        <div
          className="w-1/5 md:w-2/5 flex justify-center border-2 border-solid border-gray-100 
        p-3 font-semibold items-center"
        >
          <span
            className="fas fa-cart-plus text-2xl md:text-xl mr-2 flex md:hidden cursor-pointer 
              hover:text-organce text-gray-800"
          ></span>
          <button
            className=" font-semibold p-0 md:px-5 text-white rounded-full border-2 border-solid 
            border-organce py-0.5 items-center justify-center bg-organce 
            hover:bg-white hover:text-gray-800 hidden md:flex"
          >
            <span className="fas fa-cart-plus text-3xl md:text-xl mr-2 flex "></span>
            <span className="md:flex hidden text-xs md:text-sm">
              Thêm giỏ hàng
            </span>
          </button>
        </div>
        <div
          className="w-1/5 flex justify-center items-center border-2 border-solid border-gray-100 
        p-3"
        >
          <span
            className="bx bx-trash-alt text-2xl md:text-3xl text-gray-800 cursor-pointer 
              hover:text-organce"
          ></span>
        </div>
      </div>
    </div>
  );
}

export default ItemWishlist;
