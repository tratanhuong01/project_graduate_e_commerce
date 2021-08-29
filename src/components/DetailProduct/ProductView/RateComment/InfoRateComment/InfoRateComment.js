import React from "react";
import { useDispatch } from "react-redux";
import Star from "../Star/Star";
import ItemNumberStar from "./ItemNumberStar/ItemNumberStar";
import * as modalsAction from "../../../../../actions/modal/index";

function InfoRateComment(props) {
  //
  const dispatch = useDispatch();
  const { products, reviewAll } = props;
  const percent = () => {
    let result = "";
    result =
      (reviewAll.oneStar * 5 * 1 +
        reviewAll.twoStar * 5 * 2 +
        reviewAll.threeStar * 5 * 3 +
        reviewAll.fourStar * 5 * 4 +
        reviewAll.fiveStar * 5 * 5) /
      ((reviewAll.oneStar +
        reviewAll.twoStar +
        reviewAll.threeStar +
        reviewAll.fourStar +
        reviewAll.fiveStar) *
        5 *
        5);
    return { top: ((result * 10) / 2).toFixed(1), bottom: (5).toFixed(1) };
  };
  const data = percent();
  //
  return (
    <div className="w-full flex bg-gray-100 dark:bg-dark-third dark:border-dark-third p-2 border-2 border-solid border-gray-200">
      <div className="w-5/12 md:w-1/3 flex flex-wrap ỉtems-center jusitify-center">
        <p className="text-center text-organce pt-2 font-semibold text-4xl w-full">
          {data.top + "/" + data.bottom}
        </p>
        <div className="text-yellow-500 my-1 w-full flex justify-center">
          <Star fontSize="text-xl" star={data.top} />
        </div>
        <p className="w-full text-center my-1 text-gray-700 dark:text-gray-300">
          ({reviewAll.sumReview} đánh giá)
        </p>
        <button
          onClick={() => dispatch(modalsAction.openModalSendRate(products))}
          className="px-6 py-2.5 rounded-full bg-organce text-white font-semibold 
          my-5 text-sm mx-auto"
        >
          Gửi đánh giá của bạn
        </button>
      </div>
      <div className="w-7/12 md:w-2/3 flex items-center px-4">
        <div className="flex flex-wrap">
          <ItemNumberStar
            content={`Tất cả (${reviewAll.sumReview})`}
            current={true}
          />
          <ItemNumberStar
            content={`5 sao (${reviewAll.fiveStar})`}
            current={false}
          />
          <ItemNumberStar
            content={`4 sao (${reviewAll.fourStar})`}
            current={false}
          />
          <ItemNumberStar
            content={`3 sao (${reviewAll.threeStar})`}
            current={false}
          />
          <ItemNumberStar
            content={`2 sao (${reviewAll.twoStar})`}
            current={false}
          />
          <ItemNumberStar
            content={`1 sao (${reviewAll.oneStar})`}
            current={false}
          />
        </div>
      </div>
    </div>
  );
}

export default InfoRateComment;
