import React from "react";

function TitleWishlist(props) {
  return (
    <div className="w-full bg-white flex dark:bg-dark-second dark:text-white text-gray-600">
      <div
        className="w-1/2 font-bold flex justify-center border-2 border-solid border-gray-100 
        p-3 dark:border-dark-third"
      >
        Sản phẩm
      </div>
      <div className="w-1/2 flex justify-center">
        <div
          className="w-3/5 md:w-2/5 font-bold flex justify-center border-2 border-solid border-gray-100 
        p-3 dark:border-dark-third"
        >
          Giá
        </div>
        <div
          className="w-1/5 md:w-2/5 font-bold flex justify-center border-2 border-solid border-gray-100 
        p-3 dark:border-dark-third"
        ></div>
        <div
          className="w-1/5 font-bold flex justify-center border-2 border-solid border-gray-100 
        p-3 dark:border-dark-third"
        ></div>
      </div>
    </div>
  );
}

export default TitleWishlist;
