import React from "react";
import Pagination from "../../../../General/Pagination/Pagination";
import ItemDetailRateComment from "./ItemDetailRateComment/ItemDetailRateComment";

function DetailRateComment(props) {
  //
  const { reviews } = props;
  //
  return (
    <>
      <div
        className="w-full flex flex-wrap p-2 border-2 border-solid border-gray-200 
      dark:border-dark-third mt-3"
        id="detailRateComment"
      >
        {reviews.length <= 0 ? (
          <div className="w-full text-gray-600 font-semibold py-2.5 px-5 text-center texts-sm">
            Không có bất cứ đánh giá nào.
          </div>
        ) : (
          reviews.map((review, index) => {
            return <ItemDetailRateComment review={review} key={index} />;
          })
        )}
      </div>
      {reviews.length > 0 && (
        <div className="w-full flex justify-end my-2">
          <Pagination />
        </div>
      )}
    </>
  );
}

export default DetailRateComment;
