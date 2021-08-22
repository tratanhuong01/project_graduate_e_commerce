import React from "react";
import ItemNotify from "./ItemNotify/ItemNotify";

function MyNotify(props) {
  return (
    <div className="w-full">
      <div className="w-full flex text-gray-600 dark:text-white justify-end">
        <button
          className="p-1 text-white font-semibold 
          bg-organce"
        >
          <span className="text-sm">Đánh dấu tất cả là đã đọc</span>
        </button>
      </div>
      <hr className="my-3" />
      <ItemNotify />
      <ItemNotify />
      <ItemNotify />
    </div>
  );
}

export default MyNotify;
