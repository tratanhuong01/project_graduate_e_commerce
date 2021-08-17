import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import ItemProductOther from "../ItemProduct/ItemProductOther";
import LabelCategoryProduct from "./LabelCategoryProduct/LabelCategoryProduct";
import PaginationListProduct from "./PaginationListProduct/PaginationListProduct";

function CategoryProduct(props) {
  //
  const { products } = props;
  //
  return (
    <div
      className="xl:w-4/5 w-full mx-auto p-4 relative element__hover"
      id={products.idCategoryProduct}
    >
      <LabelCategoryProduct products={products} />

      {products.listProductCategory.length > 3 && (
        <div className="w-12 h-12 bg-gray-300 bg-opacity-50 rounded-full cursor-pointer absolute top-1/2 transform -translate-y-1/2 -left-6 z-50 flex justify-center items-center text-gray-800 element__show ">
          <span className="bx bx-chevron-left text-4xl flex"></span>
        </div>
      )}

      <ScrollContainer className="w-full max-w-full flex overflow-hidden overflow-scroll scrollbar-css">
        {products.listProductCategory.map((product, index) => {
          return <ItemProductOther product={product} key={index} />;
        })}
      </ScrollContainer>

      {products.listProductCategory.length > 3 && (
        <div className="w-12 h-12 bg-organce-second bg-opacity-50 rounded-full cursor-pointer absolute top-1/2 transform -translate-y-1/2 -right-6 z-50 flex justify-center items-center  text-white shadow-lg-organce element__show ">
          <span className="bx bx-chevron-right text-4xl flex"></span>
        </div>
      )}

      <PaginationListProduct products={products.listProductCategory} />
    </div>
  );
}

export default CategoryProduct;
