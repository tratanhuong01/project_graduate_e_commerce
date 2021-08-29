import React from "react";
import Pagination from "../../../../General/Pagination/Pagination";
import ItemDetailRateComment from "./ItemDetailRateComment/ItemDetailRateComment";

function DetailRateComment(props) {
  //
  const { reviewAll, reviews, index, setIndex, setReviews, products } = props;
  //
  return (
    <>
      <div
        className="w-full flex flex-wrap p-2 border-2 border-solid border-gray-200 
      dark:border-dark-third mt-3"
        id="detailRateComment"
      >
        {reviews.map((review, index) => {
          return <ItemDetailRateComment review={review} key={index} />;
        })}
      </div>
      <div className="w-full flex justify-end my-2">
        <Pagination
          reviewAll={reviewAll}
          index={index}
          setIndex={setIndex}
          products={products}
          setReviews={setReviews}
        />
      </div>
    </>
  );
}

export default DetailRateComment;
