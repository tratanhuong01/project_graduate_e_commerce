import React from "react";
import Star from "../../Star/Star";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function ItemDetailRateComment(props) {
  //
  const { review } = props;
  //
  return (
    <div className="w-full p-2 mb-1">
      <div className="w-full my-1 flex">
        <span className="font-semibold mr-3">
          {review.userReviewProduct
            ? `${review.userReviewProduct.firstName} ${review.userReviewProduct.lastName}`
            : review.fullName}
        </span>
        <div className="flex items-center text-yellow-500">
          <Star star={review.star} />
        </div>
      </div>
      <div className="w-full my-1 flex items-center">{review.content}</div>
      <div className="w-full flex my-1 hidden">
        <Zoom>
          <img
            src="https://bizweb.dktcdn.net/100/420/160/files/co-nen-mua-poco-x3-pro-1.jpg?v=1623732159363"
            alt=""
            className="w-20 h-20 m-1 rounded-lg object-cover"
          />
        </Zoom>
        <Zoom>
          <img
            src="https://bizweb.dktcdn.net/100/420/160/files/co-nen-mua-poco-x3-pro-1.jpg?v=1623732159363"
            alt=""
            className="w-20 h-20 m-1 rounded-lg object-cover"
          />
        </Zoom>
        <Zoom>
          <img
            src="https://bizweb.dktcdn.net/100/420/160/files/co-nen-mua-poco-x3-pro-1.jpg?v=1623732159363"
            alt=""
            className="w-20 h-20 m-1 rounded-lg object-cover"
          />
        </Zoom>
      </div>
      <div className="w-full flex my-1">
        <ul className="flex font-semibold">
          <li className="mr-1 text-organce text-sm">Gửi trả lời</li>
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
          <li className="mx-1 text-gray-500 text-sm">{review.timeCreated}</li>
        </ul>
      </div>
    </div>
  );
}

export default ItemDetailRateComment;
