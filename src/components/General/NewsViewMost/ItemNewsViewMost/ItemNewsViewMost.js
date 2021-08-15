import React from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../../constants/Config";

function ItemNewsViewMost(props) {
  //
  const { newData } = props;
  //
  return (
    <div className="w-full mx-auto my-3 mb-5 flex pr-10">
      <div className="w-1/4 news__left relative cursor-pointer">
        <img
          src={newData.thumbnail}
          className="w-full h-24 rounded-lg object-cover"
          alt=""
        />
      </div>
      <div className="w-3/4 flex px-4 relative">
        <div className="w-full absolute top-1/2 transform -translate-y-1/2">
          <Link
            className="text-xm font-semibold cursor-pointer hover:text-organce"
            to={`${Config.PAGE_NEWS}/${newData.slug}`}
          >
            {newData.title}
          </Link>
          <p className="text-gray-500 w-full flex mt-2">
            <i className="bx bxs-star mr-0.5 text-yellow-500"></i>
            <i className="bx bxs-star mr-0.5 text-yellow-500"></i>
            <i className="bx bxs-star mr-0.5 text-yellow-500"></i>
            <i className="bx bxs-star mr-0.5 text-yellow-500"></i>
            <i className="bx bxs-star mr-0.5 text-yellow-500"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemNewsViewMost;
