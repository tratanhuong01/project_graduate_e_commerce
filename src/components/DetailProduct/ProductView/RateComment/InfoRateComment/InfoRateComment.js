import React from "react";
import { useDispatch } from "react-redux";
import Star from "../Star/Star";
import ItemNumberStar from "./ItemNumberStar/ItemNumberStar";
import * as modalsAction from "../../../../../actions/modal/index";

function InfoRateComment(props) {
  //
  const dispatch = useDispatch();
  const { products } = props;
  //
  return (
    <div className="w-full flex bg-gray-100 dark:bg-dark-third dark:border-dark-third p-2 border-2 border-solid border-gray-200">
      <div className="w-5/12 md:w-1/3 flex flex-wrap ỉtems-center jusitify-center">
        <p className="text-center text-organce pt-2 font-semibold text-4xl w-full">
          4.6/5
        </p>
        <div className="text-yellow-500 my-1 w-full flex justify-center">
          <Star fontSize="text-xl" />
        </div>
        <p className="w-full text-center my-1 text-gray-700 dark:text-gray-300">
          (111 đánh giá)
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
          <ItemNumberStar content="Tất cả" current={true} />
          <ItemNumberStar content="1 sao (1)" current={false} />
          <ItemNumberStar content="2 sao (2)" current={false} />
          <ItemNumberStar content="3 sao (3)" current={false} />
          <ItemNumberStar content="4 sao (4)" current={false} />
          <ItemNumberStar content="5 sao (5)" current={false} />
        </div>
      </div>
    </div>
  );
}

export default InfoRateComment;
