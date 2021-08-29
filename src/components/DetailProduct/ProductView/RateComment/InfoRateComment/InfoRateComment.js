import React from "react";
import { useDispatch } from "react-redux";
import Star from "../Star/Star";
import ItemNumberStar from "./ItemNumberStar/ItemNumberStar";
import ButtonSendRate from "../ButtonSendRate/ButtonSendRate";
import * as reviewProductsAction from "../../../../../actions/reviewProduct/index";
function InfoRateComment(props) {
  //
  const dispatch = useDispatch();
  const { products, reviewAll, active } = props;
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
  const stars = [
    {
      name: `Tất cả (${reviewAll.sumAll})`,
      query: { all: "reviewProductsAll", once: "reviewProducts" },
      star: -1,
    },
    {
      name: `5 sao (${reviewAll.fiveStar})`,
      query: { all: "reviewProductByStarAll", once: "reviewProductByStar" },
      star: 5,
    },
    {
      name: `4 sao (${reviewAll.fourStar})`,
      query: { all: "reviewProductByStarAll", once: "reviewProductByStar" },
      star: 4,
    },
    {
      name: `3 sao (${reviewAll.threeStar})`,
      query: { all: "reviewProductByStarAll", once: "reviewProductByStar" },
      star: 3,
    },
    {
      name: `2 sao (${reviewAll.twoStar})`,
      query: { all: "reviewProductByStarAll", once: "reviewProductByStar" },
      star: 2,
    },
    {
      name: `1 sao (${reviewAll.oneStar})`,
      query: { all: "reviewProductByStarAll", once: "reviewProductByStar" },
      star: 1,
    },
  ];
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
        <ButtonSendRate products={products} />
      </div>
      <div className="w-7/12 md:w-2/3 flex items-center px-4">
        <div className="flex flex-wrap">
          {stars.map((star, index) => {
            return (
              <ItemNumberStar
                key={index}
                active={active}
                onClick={() => {
                  dispatch(
                    reviewProductsAction.loadReviewProductActiveStarRequest({
                      star,
                      products,
                      reviewAll,
                    })
                  );
                }}
                star={star}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InfoRateComment;
