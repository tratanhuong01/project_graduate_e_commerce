import React, { useState } from "react";
import CategoryIndexLeft from "../../CategoryIndexLeft/CategoryIndexLeft";

function ItemCategoryProduct(props) {
  //
  const [show, setShow] = useState(false);
  const { label, icon, categorys } = props;
  //
  return (
    <div className="w-full relative flex-wrap">
      <div
        onClick={() => setShow(!show)}
        className="w-full flex items-center p-2.5 flex border-2 border-solid border-gray-200 
        cursor-pointer hover:text-organce flex md:hidden"
      >
        <span className={`${icon} text-2xl mr-3 `}></span>
        <span className="font-semibold">{label}</span>
      </div>
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
        className={`w-full md:w-64 pl-5 relative md:absolute -top-1 bg-white z-50 overflow-y-auto scrollbar-css  data__category ${
          show ? "flex flex-wrap" : "hidden"
        } border-2 border-solid left-0 md:left-full`}
      >
        <CategoryIndexLeft categorys={categorys} />
      </div>
    </div>
  );
}

export default ItemCategoryProduct;
