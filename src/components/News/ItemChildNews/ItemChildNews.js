import React from "react";

function ItemChildNews(props) {
  return (
    <div className="xl:w-60 w-full item__child__news__item px-2 xl:mr-6 my-2 bg-white relative">
      <div className="w-full mx-auto my-3 mb-5 ">
        <div className="w-full news__left relative cursor-pointer">
          <img
            src="http://www.thetahmid.com/themes/tennews-v1.1/images/popular-2.jpg"
            className="w-full h-60 lg:h-36 object-cover"
            alt=""
          />
        </div>
        <div className="w-full flex px-1 relative">
          <div className="w-full">
            <p className="mb-2 text-xm font-semibold cursor-pointer hover:text-organce">
              Chi tiết smartwatch mới nhất của samsung
            </p>
            <p className="text-gray-500 w-full flex">
              <button className="bg-organce mr-3 px-3 py-1 rounded-full text-xs text-gray-100 font-semibold">
                Công nghệ
              </button>
              <span className="flex items-center text-sm font-semibold">
                29/05/2021
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemChildNews;
