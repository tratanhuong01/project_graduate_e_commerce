import React from "react";

function TypeAddress(props) {
  return (
    <div className="w-full px-2 my-t bg-white">
      <hr className="my-3" />
      <p className="mb-3 text-gray-700">Loại địa chỉ</p>
      <div className="flex items-center text-sm">
        <button
          type="button"
          className="font-semibold text-organce border-organce border-solid 
            border-2 px-5 py-2"
        >
          Nhà riêng
        </button>
        <button
          type="button"
          className="font-semibold text-gray-600 border-gray-300 border-solid 
            border-2 px-5 py-2 ml-5"
        >
          Văn phòng
        </button>
      </div>
    </div>
  );
}

export default TypeAddress;
