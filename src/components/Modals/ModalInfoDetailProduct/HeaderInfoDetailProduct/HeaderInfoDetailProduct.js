import React from "react";

function HeaderInfoDetailProduct(props) {
  //
  const { setIndex, index, bgBlack } = props;
  //
  return (
    <div className={`w-full h-16 border-n-2 border-solid border-gray-200 flex items-center justify-center 
    rounded-t-lg sticky top-0 z-50 dark:bg-dark-third ${bgBlack ? bgBlack : "bg-white"}`}>
      <ul className="w-10/12 py-2 mt-0.5 mx-auto bg-white flex justify-center items-center">
        <li
          onClick={() => setIndex(0)}
          className={`border-b-4 mx-2 border-solid font-semibold px-4 cursor-pointer 
          ${index === 0
              ? "border-organce  text-organce"
              : "border-white  text-gray-800 dark:text-gray-300 dark:border-dark-third"
            }`}
        >
          Hình ảnh
        </li>
        <li
          onClick={() => setIndex(1)}
          className={`border-b-4 py-2 mx-2 border-solid font-semibold px-4 cursor-pointer 
          ${index === 1
              ? "border-organce  text-organce"
              : "border-white  text-gray-800 dark:text-gray-300 dark:border-dark-third"
            }`}
        >
          Thông số kĩ thuật
        </li>
      </ul>
    </div >
  );
}

export default HeaderInfoDetailProduct;
