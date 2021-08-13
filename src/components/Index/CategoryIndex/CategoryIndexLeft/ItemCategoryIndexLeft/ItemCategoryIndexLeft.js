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
        className="w-full flex items-center p-2.5 flex border-2 border-solid border-gray-200 
        cursor-pointer hover:text-organce hidden md:flex"
      >
        <span className={`${icon} text-2xl mr-3 `}></span>
        <span className="font-semibold">{label}</span>
      </Link>
      <button
        onClick={() => setShow(!show)}
        className="w-full flex items-center p-2.5 flex border-2 border-solid border-gray-200 
        cursor-pointer hover:text-organce flex md:hidden"
      >
        <span className={`${icon} text-2xl mr-3 `}></span>
        <span className="font-semibold">{label}</span>
      </button>
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
      <div
        className={`w-full md:w-64 relative md:absolute -top-1 bg-white z-50 overflow-y-auto scrollbar-css  data__category ${
          show ? "flex flex-wrap" : "hidden"
        } border-2 border-solid left-0 md:left-full`}
      >
        <div className="w-full font-semibold text-black">
          {groups.groupProductList.map((group, index) => {
            return (
              <Link
                to={`${Config.PAGE_PRODUCT}/${groups.categoryProduct.slugCategoryProduct}/${group.slugGroupProduct}`}
                className="w-full p-2.5 flex border-2 border-solid border-gray-200 
                cursor-pointer hover:text-organce"
                key={index}
              >
                {group.nameGroupProduct}
              </Link>
            );
          })}
        </div>
      </div>
    </li>
  );
}

export default ItemCategoryIndexLeft;
