import React from "react";

function TitleWishlist(props) {
  return (
    <div className="w-full bg-white flex">
      <div
        className="w-1/2 font-bold text-gray-600 flex justify-center border-2 border-solid border-gray-100 
        p-3"
      >
        Sản phẩm
      </div>
      <div className="w-1/2 flex justify-center">
        <div
          className="w-3/5 md:w-2/5 font-bold text-gray-600 flex justify-center border-2 border-solid border-gray-100 
        p-3"
        >
          Giá
        </div>
        <div
          className="w-1/5 md:w-2/5 font-bold text-gray-600 flex justify-center border-2 border-solid border-gray-100 
        p-3"
        ></div>
        <div
          className="w-1/5 font-bold text-gray-600 flex justify-center border-2 border-solid border-gray-100 
        p-3"
        ></div>
      </div>
    </div>
  );
}

export default TitleWishlist;
