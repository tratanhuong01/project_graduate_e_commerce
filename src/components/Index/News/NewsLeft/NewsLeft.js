import React, { Component } from "react";

class NewsLeft extends Component {
  render() {
    return (
      <div className="w-full sm:w-1.2 mr-10 relative news__left cursor-pointer">
        <div
          className="w-full absolute top-0 left-0 bg-black
        bg-opacity-50 h-full news__view"
        >
          <div className="w-full relative h-full">
            <div
              className="w-full absolute top-1/2 left-1/2 transform -translate-y-1/2 
                -translate-x-1/2 flex justify-center flex-wrap"
            >
              <p
                className="w-full mb-4 text-white text-xm font-semibold hover:text-organce 
                    cursor-pointer text-center"
              >
                Mở hộp apple watch series 4
              </p>
              <i className="bx bx-play-circle text-6xl cursor-pointer text-white "></i>
            </div>
          </div>
        </div>
        <i
          className="bx bx-play-circle absolute text-6xl cursor-pointer text-white absolute top-1/2  
        left-1/2 transform -translate-y-1/2 -translate-x-1/2 news_bntPlay"
        ></i>
        <img
          src="./images/thumnail.jpg"
          className="w-full max-h-148 h-full object-cover"
          alt=""
        />
      </div>
    );
  }
}

export default NewsLeft;
