import React from "react";
import { Link } from "react-router-dom";
import { PAGE_DETAIL_PRODUCT } from "../../../../../../../constants/Config";

function ItemProductBill(props) {
  //
  const { product } = props;
  //
  return (
    <div className="w-full flex items-center text-gray-600 dark:text-white flex-shrink-0">
      <div className="w-2/3 flex items-center">
        <img
          src={product.productFull.image.src}
          alt=""
          className="w-24 h-24 p-1 rounded-lg object-contain"
        />
        <div className="flex ml-4 flex-col">
          <Link
            to={`${PAGE_DETAIL_PRODUCT}/${product.productFull.slug}`}
            className="mb-1 font-semibold hover:text-organce"
          >
            {product.productFull.nameLineProduct.length > 50
              ? product.productFull.nameLineProduc.substring(0, 50) + "..."
              : product.productFull.nameLineProduct +
                ` ${
                  product.productFull.memory
                    ? product.productFull.memory.nameMemory + " "
                    : ""
                }${
                  product.productFull.color
                    ? "Màu " +
                      product.productFull.color.description.toLowerCase()
                    : ""
                }`}
          </Link>
          <p>Số lương : {product.billDetail.amount}</p>
          <p className="flex flex-col">
            {product.productFull.color &&
              `Màu : ${product.productFull.color.description} - `}
            {product.productFull.memory &&
              `Bộ nhớ : ${product.productFull.memory.nameMemory}`}
          </p>
        </div>
      </div>
      <div className="w-1/3 flex items-center justify-end font-semibold">
        {new Intl.NumberFormat().format(product.billDetail.price)}đ x{" "}
        {product.billDetail.amount}
      </div>
    </div>
  );
}

export default ItemProductBill;
