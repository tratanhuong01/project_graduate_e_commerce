import React, { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import ItemProductOther from "../ItemProduct/ItemProductOther";
import LabelCategoryProduct from "./LabelCategoryProduct/LabelCategoryProduct";
import PaginationListProduct from "./PaginationListProduct/PaginationListProduct";

function CategoryProduct(props) {
  //
  const { products } = props;
  const [active, setActive] = useState(0);
  //
  return (
    <div
      className="xl:w-4/5 w-full mx-auto p-4 relative element__hover"
      id={`${products.idCategoryProduct}`}
    >
      <LabelCategoryProduct products={products} />

      {products.listProductCategory.length > 3 && (
        <div
          onClick={() => {
            if (active - 1 >= 0) {
              setActive(active - 1);
              if (document.querySelector(`.${products.idCategoryProduct}`))
                document.querySelector(
                  `.${products.idCategoryProduct}`
                ).scrollLeft = (active - 1) * 4 * 290;
            }
          }}
          className={`w-12 h-12 ${
            active === 0
              ? "bg-gray-300 bg-opacity-50 cursor-not-allowed "
              : " bg-organce-second bg-opacity-50 cursor-pointer text-white shadow-lg-organce"
          } rounded-full absolute top-1/2 transform -translate-y-1/2 -left-6 z-50 flex justify-center items-center element__show`}
        >
          <span className="bx bx-chevron-left text-4xl flex"></span>
        </div>
      )}

      <ScrollContainer
        className={`w-full max-w-full flex overflow-hidden overflow-scroll scrollbar-css
         ${products.idCategoryProduct}`}
      >
        {products.listProductCategory.map((product, index) => {
          return <ItemProductOther product={product} key={index} />;
        })}
      </ScrollContainer>

      {products.listProductCategory.length > 3 && (
        <div
          onClick={() => {
            if (
              active + 1 <
              Math.ceil(products.listProductCategory.length / 4)
            ) {
              setActive(active + 1);
              if (document.querySelector(`.${products.idCategoryProduct}`))
                document.querySelector(
                  `.${products.idCategoryProduct}`
                ).scrollLeft = (active + 1) * 4 * 290;
            }
          }}
          className={`w-12 h-12 ${
            active === Math.ceil(products.listProductCategory.length / 4) - 1
              ? "bg-gray-300 bg-opacity-50 cursor-not-allowed"
              : " bg-organce-second bg-opacity-50 cursor-pointer text-white  shadow-lg-organce"
          } rounded-full absolute top-1/2 transform -translate-y-1/2 -right-6 z-50 flex justify-center items-center element__show`}
        >
          <span className="bx bx-chevron-right text-4xl flex"></span>
        </div>
      )}

      <PaginationListProduct
        products={products.listProductCategory}
        active={active}
        setActive={setActive}
        idCategoryProduct={products.idCategoryProduct}
      />
    </div>
  );
}

export default CategoryProduct;
