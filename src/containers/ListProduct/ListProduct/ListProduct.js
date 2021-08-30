import React from "react";
import { useSelector } from "react-redux";
import ItemProduct from "../../../components/General/ItemProduct/ItemProduct";

function ListProduct(props) {
  //
  const states = useSelector((state) => {
    return {
      listProduct: state.listProduct,
    };
  });
  const { listProduct } = states;
  //
  return (
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
  );
}

export default ListProduct;
