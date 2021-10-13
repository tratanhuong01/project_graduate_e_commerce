import React from "react";
import { useSelector } from "react-redux";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import FilterProduct from "../../components/ListProduct/FilterProduct/FilterProduct";
import ListProduct from "./ListProduct/ListProduct";
import { PAGE_PRODUCT } from "../../constants/Config";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import GroupProduct from "../../components/ListProduct/GroupProduct/GroupProduct";
import CategoryProduct from "../../components/ListProduct/CategoryProduct/CategoryProduct";

function MainListProduct(props) {
  //
  const listProduct = useSelector((state) => state.listProduct);
  //
  return (
    <div className="w-full dark:bg-dark-second dark:text-gray-300">
      <BreadcrumbsItem to={PAGE_PRODUCT}>Sản phẩm</BreadcrumbsItem>
      <BreadcrumbsItem to={`${PAGE_PRODUCT}/${listProduct.slug}`}>
        {listProduct.name}
      </BreadcrumbsItem>
      <LevelUrl />
      <hr className="w-full xl:w-4/5  mx-auto my-2"></hr>
      <div className="w-full xl:w-4/5 mx-auto p-4">
        <div className="w-full mx-auto mb-2">
          {listProduct.slug ? (
            <>{listProduct.type === true && <GroupProduct />}</>
          ) : (
            <CategoryProduct />
          )}
          <FilterProduct />
          <ListProduct listProduct={listProduct} />
        </div>
      </div>
    </div>
  );
}

export default MainListProduct;
