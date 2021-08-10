import React from "react";
import ItemDetailRateComment from "./ItemDetailRateComment/ItemDetailRateComment";

function DetailRateComment(props) {
  return (
    <>
      <div className="w-full flex flex-wrap p-2 border-2 border-solid border-gray-200">
        <ItemDetailRateComment />
        <ItemDetailRateComment />
        <ItemDetailRateComment />
        <ItemDetailRateComment />
      </div>
      <div className="w-full flex justify-end my-2">
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
    </>
  );
}

export default DetailRateComment;
