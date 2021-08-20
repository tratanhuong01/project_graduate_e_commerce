import React from "react";

function CreateAddress(props) {
  return (
    <div className="w-full px-2 my-1 bg-white absolute top-full left-0 z-20">
      <div
        className="p-1 border-2 border-solid border-gray-300 
        text-gray-400 shadow-sm"
      >
        <ul className="w-full flex">
          <li
            className="w-1/3 text-center py-2 border-b-2 border-solid border-organce 
            text-organce cursor-pointer font-semibold"
          >
            Tỉnh/thành phố
          </li>
          <li
            className="w-1/3 text-center py-2 border-b-2 border-solid border-white 
            text-gray-600 cursor-pointer cursor-not-allowed"
          >
            Quận/huyện
          </li>
          <li
            className="w-1/3 text-center py-2 border-b-2 border-solid border-white 
            text-gray-600 cursor-pointer cursor-not-allowed"
          >
            Phường/xã
          </li>
        </ul>
        <div
          className="w-full text-gray-800 h-56 max-h-56 overflow-y-auto my-1 
        scrollbar-css"
        >
          <div className="w-full p-2 flex items-center hover:bg-gray-100 cursor-pointer">
            An giang
          </div>
          <div className="w-full p-2 flex items-center hover:bg-gray-100 cursor-pointer">
            An giang
          </div>
          <div className="w-full p-2 flex items-center hover:bg-gray-100 cursor-pointer">
            An giang
          </div>
          <div className="w-full p-2 flex items-center hover:bg-gray-100 cursor-pointer">
            An giang
          </div>
          <div className="w-full p-2 flex items-center hover:bg-gray-100 cursor-pointer">
            An giang
          </div>
          <div className="w-full p-2 flex items-center hover:bg-gray-100 cursor-pointer">
            An giang
          </div>
          <div className="w-full p-2 flex items-center hover:bg-gray-100 cursor-pointer">
            An giang
          </div>
          <div className="w-full p-2 flex items-center hover:bg-gray-100 cursor-pointer">
            An giang
          </div>
          <div className="w-full p-2 flex items-center hover:bg-gray-100 cursor-pointer">
            An giang
          </div>
          <div className="w-full p-2 flex items-center hover:bg-gray-100 cursor-pointer">
            An giang
          </div>
          <div className="w-full p-2 flex items-center hover:bg-gray-100 cursor-pointer">
            An giang
          </div>
          <div className="w-full p-2 flex items-center hover:bg-gray-100 cursor-pointer">
            An giang
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAddress;
