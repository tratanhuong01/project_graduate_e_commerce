import React, { useState } from "react";
import Star from "../../Star/Star";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import FormReplyReview from "../../FormReplyReview/FormReplyReview";
import ChildItemDetailRateCommen from "./ChildItemDetailRateComment/ChildItemDetailRateCommen";

function ItemDetailRateComment(props) {
  //
  const { review } = props;
  const [show, setShow] = useState(false);
  //
  return (
    <div className="w-full p-2 mb-1">
      <div className="w-full my-1 flex">
        <span className="font-semibold mr-3">
          {review.reviewProduct.userReviewProduct
            ? `${review.reviewProduct.userReviewProduct.firstName} ${review.reviewProduct.userReviewProduct.lastName}`
            : review.reviewProduct.fullName}
          {review.reviewProduct.userReviewProduct
            ? review.reviewProduct.userReviewProduct.userRole
              ? review.reviewProduct.userReviewProduct.userRole.id !==
                  "CUSTOMER" && (
                  <span className="px-2 rounded-full ml-3 py-1 border-2 border-solid border-organce font-semibold text-xs flex items-center">
                    <span className="bx bxs-check-shield text-green-500 ml-1"></span>
                    Quản trị viên
                  </span>
                )
              : ""
            : ""}
        </span>
        <div className="flex items-center text-yellow-500">
          <Star star={review.reviewProduct.star} />
        </div>
      </div>
      <div className="w-full my-1 flex items-center">
        {review.reviewProduct.content}
      </div>
      {review.reviewProduct.image && (
        <div className="w-full my-1">
          {JSON.parse(review.reviewProduct.image).map((image) => (
            <Zoom key={image.id}>
              <img
                src={image.src}
                alt=""
                className="w-20 h-20 m-1 rounded-lg object-cover"
              />
            </Zoom>
          ))}
        </div>
      )}
      <div className="w-full flex my-1">
        <ul className="flex font-semibold">
          <li
            onClick={() => setShow(!show)}
            className="mr-1 text-organce text-sm cursor-pointer"
          >
            {show ? "Đóng" : "Gửi trả lời"}
          </li>
          <li className="flex mx-1 items-center">
            <span className="flex items-center w-1.5 h-1.5 rounded-full bg-gray-500"></span>
          </li>
          <li className="mx-1 text-gray-500 flex items-center">
            <span className="bx bxs-like mr-1 text-sm"></span>
            <span className="mx-1.5 text-sm">{review.useful}</span>
            <span className="mr-1 text-sm text-organce">Hữu ích</span>
          </li>
          <li className="flex mx-1 items-center">
            <span className="flex items-center w-1.5 h-1.5 rounded-full bg-gray-500"></span>
          </li>
          <li className="mx-1 text-organce text-sm">
            <span className="fas fa-exclamation-triangle mr-1 text-sm"></span>
            <span className="mr-1 text-sm">Báo cáo vi phạm</span>
          </li>
          <li className="flex mx-1 items-center">
            <span className="flex items-center w-1.5 h-1.5 rounded-full bg-gray-500"></span>
          </li>
          <li className="mx-1 text-gray-500 text-sm">
            {review.reviewProduct.timeCreated}
          </li>
        </ul>
      </div>
      <div className="w-95% ml-auto">
        {review.reviewProductList.map((item, index) => {
          return <ChildItemDetailRateCommen key={index} review={item} />;
        })}
        {show && <FormReplyReview review={review} setShow={setShow} />}
      </div>
    </div>
  );
}

export default ItemDetailRateComment;
