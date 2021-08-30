import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../General/Pagination/Pagination";
import ItemDetailRateComment from "./ItemDetailRateComment/ItemDetailRateComment";
import * as reviewProductsAction from "../../../../../actions/reviewProduct/index";
function DetailRateComment(props) {
  //
  const { reviews } = props;
  const dispatch = useDispatch();
  const { products, active, index, reviewAll } = useSelector(
    (state) => state.reviewProduct
  );
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
          <Pagination
            length={reviewAll.sumReview}
            index={index}
            limit={5}
            dispatch={(index) => {
              dispatch(
                reviewProductsAction.loadReviewProductByIndexPageRequest({
                  index,
                  active,
                  products,
                })
              );
            }}
          />
        </div>
      )}
    </>
  );
}

export default DetailRateComment;
