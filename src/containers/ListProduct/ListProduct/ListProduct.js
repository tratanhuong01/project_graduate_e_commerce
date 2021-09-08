import React from "react";
import ItemProduct from "../../../components/General/ItemProduct/ItemProduct";
import ItemProductLoading from "../../../components/General/ItemProduct/ItemProductLoading/ItemProductLoading";

function ListProduct(props) {
  //
  const { listProduct } = props;
  //
  return listProduct.products ? (
    listProduct.products.length > 0 ? (
      <div className="w-full mx-auto ">
        <div className="w-full flex flex-wrap my-4 z-10">
          {listProduct.products.map((product, index) => {
            return <ItemProduct product={product} key={index} />;
          })}
        </div>
        <div className="w-full flex justify-center my-2">
          <ul className="flex justify-end items-center">
            <li
              className="w-10 h-10 rounded-full text-sm font-semibold border-2 m-0.5 cursor-pointer 
        border-solid border-gray-500 flex justify-center items-center"
            >
              <i className="bx bxs-chevrons-left"></i>
            </li>
            <li
              className="w-10 h-10 rounded-full text-sm font-semibold border-2 m-0.5 cursor-pointer 
        border-solid border-gray-500 flex justify-center items-center"
            >
              0
            </li>
            <li
              className="w-10 h-10 rounded-full text-sm font-semibold border-2 m-0.5 cursor-pointer 
        border-solid border-gray-500 flex justify-center items-center"
            >
              1
            </li>
            <li
              className="w-10 h-10 rounded-full text-sm font-semibold border-2 m-0.5 cursor-pointer 
        border-solid border-gray-500 flex justify-center items-center"
            >
              2
            </li>
            <li
              className="w-10 h-10 rounded-full text-sm font-semibold border-2 m-0.5 cursor-pointer 
        border-solid border-gray-500 flex justify-center items-center"
            >
              <i className="bx bxs-chevrons-right"></i>
            </li>
          </ul>
        </div>
      </div>
    ) : (
      <div className="w-full flex flex-col my-5 items-center h-80 justify-center">
        <img
          src="https://cdn.tgdd.vn/mwgcart/mwg-site/ContentMwg/images/no-result.gif"
          alt=""
          className="w-80 object-cover"
        />
        <p className="text-center text-organce font-semibold my-2">
          Xem thêm sản phẩm
        </p>
      </div>
    )
  ) : (
    <div className="w-full mx-auto ">
      <div className="w-full flex flex-wrap my-4 z-10">
        <ItemProductLoading />
        <ItemProductLoading />
        <ItemProductLoading />
        <ItemProductLoading />
        <ItemProductLoading />
        <ItemProductLoading />
        <ItemProductLoading />
        <ItemProductLoading />
      </div>
    </div>
  );
}

export default ListProduct;
