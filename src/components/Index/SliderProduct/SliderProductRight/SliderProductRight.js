import React from "react";
import { useHistory } from "react-router-dom";
import * as Config from "../../../../constants/Config";

function SliderProductRight(props) {
  //
  const { current } = props;
  const history = useHistory();
  //
  return (
    <div
      className="w-full md:w-2/3 flex items-center ml-20 md:ml-10 animate__animated animate__fadeInRight 
      stop__animation noselect"
      style={{ animationDelay: "1s" }}
    >
      <div className="flex flex-col">
        <p className="text-organce font-semibold text-xm md:text-2xl mb-4 ">
          {current.slideProduct.lineProduct.groupProduct.nameGroupProduct}
        </p>
        <p className="text-gray-700 dark:text-white font-bold text-2xl md:text-5xl mb-2">
          {current.slideProduct.lineProduct.nameLineProduct}
        </p>
        <p className="text-gray-500 dark:text-gray-300 font-semibold text-sm md:text-xl mb-6">
          {current.slogan}
        </p>
        <button
          onClick={() =>
            history.push(
              `${Config.PAGE_DETAIL_PRODUCT}/${current.slideProduct.slug}`
            )
          }
          className="w-32 py-1.5 md:w-40 md:py-2.5 text-xs md:text-sm rounded-full border-2 border-white border-solid dark:bg-dark-main bg-organce text-white font-semibold"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}

export default SliderProductRight;
