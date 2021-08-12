import React from "react";

function ItemCategoryIndexLeft(props) {
  //
  const { icon, label } = props;
  //
  return (
    <li
      className="w-full p-2.5 flex border-2 border-solid border-gray-200 
    cursor-pointer hover:text-organce item__category"
    >
      <span className={`${icon} text-2xl mr-3 flex items-center `}></span>
      <span className="font-semibold flex items-center ">{label}</span>
      <div
        className="absolute top-0 px-3 bg-white z-40 overflow-y-auto scrollbar-css data__category 
        flex flex-wrap border-2 border-solid"
        style={{ height: 384, maxHeight: 384, width: "80%", left: "20%" }}
      >
        <div className="w-1/3 mb-3">
          <p className="font-semibold mb-2">Xiaomi</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 5</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 6</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 7</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 8</p>
        </div>
        <div className="w-1/3 mb-3">
          <p className="font-semibold mb-2">Xiaomi</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 5</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 6</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 7</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 8</p>
        </div>
        <div className="w-1/3 mb-3">
          <p className="font-semibold mb-2">Xiaomi</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 5</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 6</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 7</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 8</p>
        </div>
        <div className="w-1/3 mb-3">
          <p className="font-semibold mb-2">Xiaomi</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 5</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 6</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 7</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 8</p>
        </div>
        <div className="w-1/3 mb-3">
          <p className="font-semibold mb-2">Xiaomi</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 5</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 6</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 7</p>
          <p className="font-semibold mb-1">Xiaomi Redmi 8</p>
        </div>
      </div>
    </li>
  );
}

export default ItemCategoryIndexLeft;
