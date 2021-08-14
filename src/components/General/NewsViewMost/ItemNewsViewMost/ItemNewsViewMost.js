import React from "react";
import { Link } from "react-router-dom";

function ItemNewsViewMost(props) {
  return (
    <div className="w-full mx-auto my-3 mb-5 flex pr-10">
      <div className="w-1/4 news__left relative cursor-pointer">
        <img
          src="https://bizweb.dktcdn.net/100/420/160/articles/letgo-1280x720-800-resize-1487-1624210692.jpeg?v=1628696754563"
          className="w-full h-24 rounded-lg object-cover"
          alt=""
        />
      </div>
      <div className="w-3/4 flex px-4 relative">
        <div className="w-full absolute top-1/2 transform -translate-y-1/2">
          <Link
            className="text-xm font-semibold cursor-pointer hover:text-organce"
            to="/tin-tuc/dien-thoai-gap-galaxy-z-flip-3-5g-ra-mat-chip-888-manh-me-gia-khong-tuong"
          >
            Điện thoại gập Galaxy Z Flip 3 5G ra mắt
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
