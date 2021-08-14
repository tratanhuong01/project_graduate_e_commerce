import React from "react";
import { Link } from "react-router-dom";

function ItemCommentPost(props) {
  return (
    <>
      <div className="w-full p-2 flex relative">
        <img
          src="http://www.thetahmid.com/themes/tennews-v1.1/images/comm-1.jpg"
          alt=""
          className="w-14 h-14 rounded-full mr-4"
        />
        <div className="flex flex-col">
          <Link to="" className="font-semibold mb-2">
            Trà Hưởng
          </Link>
          <span className="text-gray-500 text-xs mb-1">
            Feb 11, 2019 at 3:15pm
          </span>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nam,
            non magnam molestias aspernatur. Magni suscipit sequi harum odit
            sunt est.
          </p>
        </div>
        <button
          className="p-1 text-xs rounded-lg font-semibold text-gray-700 border-organce 
          border-2 border-solid hover:bg-organce hover:text-white absolute top-1 right-1"
        >
          Phản hồi
        </button>
      </div>
      <div className="w-11/12 ml-auto">
        <div className="w-full p-2 flex relative">
          <img
            src="http://www.thetahmid.com/themes/tennews-v1.1/images/comm-1.jpg"
            alt=""
            className="w-14 h-14 rounded-full mr-4"
          />
          <div className="flex flex-col">
            <Link to="" className="font-semibold mb-2">
              Trà Hưởng
            </Link>
            <span className="text-gray-500 text-xs mb-1">
              Feb 11, 2019 at 3:15pm
            </span>
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              nam, non magnam molestias aspernatur. Magni suscipit sequi harum
              odit sunt est.
            </p>
          </div>
          <button
            className="p-1 text-xs rounded-lg font-semibold text-gray-700 border-organce 
            border-2 border-solid hover:bg-organce hover:text-white absolute top-1 right-1"
          >
            Phản hồi
          </button>
        </div>
      </div>
      <div className="w-11/12 ml-auto">
        <div className="w-full flex my-3">
          <img
            src="http://www.thetahmid.com/themes/tennews-v1.1/images/comm-1.jpg"
            alt=""
            className="w-12 h-12 rounded-full mr-4"
          />
          <input
            type="text"
            className="w-full p-2 rounded-full border-2 border-solid 
            border-gray-200"
            placeholder="Nhập nội dung..."
          ></input>
          <button
            className="w-48 md:w-36 flex font-semibold px-2 ml-3 py-1.5 text-white bg-organce-second 
             hover:bg-organce rounded-lg text-sm items-center justify-center"
          >
            <span className="bx bx-send mr-3 text-xl"></span> Bình luận
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemCommentPost;
