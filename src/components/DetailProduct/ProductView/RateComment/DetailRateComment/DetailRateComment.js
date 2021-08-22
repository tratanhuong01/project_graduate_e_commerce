import React from "react";
import Pagination from "../../../../General/Pagination/Pagination";
import ItemDetailRateComment from "./ItemDetailRateComment/ItemDetailRateComment";

function DetailRateComment(props) {
  return (
    <>
      <div
        className="w-full flex flex-wrap p-2 border-2 border-solid border-gray-200 
      dark:border-dark-third mt-3"
      >
        <ItemDetailRateComment />
        <ItemDetailRateComment />
        <ItemDetailRateComment />
        <ItemDetailRateComment />
      </div>
      <div className="w-full flex justify-end my-2">
        <Pagination />
      </div>
    </>
  );
}

export default DetailRateComment;
