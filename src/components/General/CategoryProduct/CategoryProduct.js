import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import ItemProductOther from "../ItemProduct/ItemProductOther";
import LabelCategoryProduct from "./LabelCategoryProduct/LabelCategoryProduct";

function CategoryProduct(props) {
  //
  const { products } = props;
  //
  return (
    <div className="xl:w-4/5 w-full mx-auto p-4 relative element__hover">
      <LabelCategoryProduct products={products} />
      <div className="w-12 h-12 bg-gray-300 bg-opacity-50 rounded-full cursor-pointer absolute top-1/2 transform -translate-y-1/2 -left-6 z-50 flex justify-center items-center text-gray-800 element__show">
        <span className="bx bx-chevron-left text-4xl flex"></span>
      </div>
      <ScrollContainer className="w-full max-w-full flex overflow-hidden overflow-scroll scrollbar-css flex-shink">
        {products.listProductCategory.map((product, index) => {
          return <ItemProductOther product={product} key={index} />;
        })}
      </ScrollContainer>
      <div className="w-12 h-12 bg-organce-second bg-opacity-50 rounded-full cursor-pointer absolute top-1/2 transform -translate-y-1/2 -right-6 z-50 flex justify-center items-center  text-white shadow-lg-organce element__show">
        <span className="bx bx-chevron-right text-4xl flex"></span>
      </div>
      <div className="w-full flex justify-center">
        <ul className="flex items-center jusitfy-center">
          <li
            className="bg-organce border-solid border-yellow-500 w-5 h-5 rounded-full 
          m-1 cursor-pointer"
          ></li>
          <li
            className="bg-white border-solid border-2 border-organce w-5 h-5 rounded-full 
          m-1 cursor-pointer"
          ></li>
          <li
            className="bg-white border-solid border-2 border-organce w-5 h-5 rounded-full 
          m-1 cursor-pointer"
          ></li>
        </ul>
      </div>
    </div>
  );
}

export default CategoryProduct;
