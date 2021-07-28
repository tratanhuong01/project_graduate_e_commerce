import React, { Component } from "react";

class ItemNews extends Component {
  render() {
    return (
      <div className="w-full mt-8 mb-10 flex">
        <div className="w-1/4 news__left relative cursor-pointer">
          <div
            className="w-full absolute top-0 left-0 bg-black
            bg-opacity-50 h-full news__view"
          >
            <div className="w-full relative h-full">
              <div
                className="w-full absolute top-1/2 left-1/2 transform -translate-y-1/2 
                -translate-x-1/2 flex justify-center flex-wrap"
              ></div>
            </div>
          </div>
          <i
            className="bx bx-play-circle absolute text-4xl cursor-pointer text-white absolute top-1/2  
            left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          ></i>
          <img
            src="/images/thumnail_2.jpg"
            className="w-full object-cover"
            alt=""
          />
        </div>
        <div className="w-3/4 flex px-4 relative">
          <div className="w-full absolute top-1/2 transform -translate-y-1/2">
            <p className="mb-2 text-xm font-semibold cursor-pointer hover:text-organce">
              Chi tiết smartwatch mới nhất của samsung
            </p>
            <p className="text-gray-500">0 Bình luận | 29/05/2021</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemNews;
