import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../../../constants/Config";

function ItemCategoryIndexLeft(props) {
  //
  const { icon, label, groups } = props;
  const [show, setShow] = useState(false);
  //
  return (
    <li className="w-full item__category relative flex-wrap">
      <Link
        to={`${Config.PAGE_PRODUCT}/${groups.categoryProduct.slugCategoryProduct}`}
        className="w-full flex items-center p-2  border-b border-solid border-gray-200 
        cursor-pointer hover:text-organce dark:border-dark-third text-gray-700 dark:text-white"
      >
        <span className={`${icon} text-2xl mr-3 `}></span>
        <span className="font-semibold">{label}</span>
      </Link>
      <div
        onClick={() => setShow(!show)}
        className={`cursor-pointer absolute top-3 right-2 md:hidden`}
      >
        <i
          className={`${
            show ? "bx bx-minus" : "bx bx-plus"
          } text-xl cursor-pointer `}
        ></i>
      </div>

      {groups.groupProductList.length > 1 && (
        <div
          className={`w-full md:w-64 relative md:absolute -top-1 bg-white z-50 overflow-y-auto scrollbar-css  data__category dark:bg-dark-third dark:border-dark-second ${
            show ? "flex flex-wrap" : "hidden"
          } border-2 border-solid left-0 md:left-full mt-1 `}
        >
          <div
            className="w-full font-semibold text-gray-600 shadow-lg overflow-y-auto scrollbar-css"
            style={{ maxHeight: 384 }}
          >
            {groups.groupProductList.map((group, index) => {
              return (
                <Link
                  to={`${Config.PAGE_PRODUCT}/${groups.categoryProduct.slugCategoryProduct}/${group.slugGroupProduct}`}
                  className="w-full p-2.5 flex border-b border-solid border-gray-200 
                cursor-pointer hover:text-organce dark:text-white dark:border-dark-third"
                  key={index}
                >
                  {group.nameGroupProduct}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </li>
  );
}

export default ItemCategoryIndexLeft;
