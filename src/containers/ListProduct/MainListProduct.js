import React from "react";
import { useSelector } from "react-redux";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import FilterProduct from "../../components/ListProduct/FilterProduct/FilterProduct";
import ListProduct from "./ListProduct/ListProduct";
import { NotFound } from "http-errors";
function MainListProduct(props) {
  //
  const listProduct = useSelector((state) => state.listProduct);
  const { slug } = props;
  //
  return (
    <div className="w-full dark:bg-dark-second dark:text-gray-300">
      <LevelUrl />
      <hr className="w-full xl:w-4/5  mx-auto my-2"></hr>
      <div className="w-full xl:w-4/5 mx-auto p-4">
        {listProduct.products === "" ? (
          <NotFound />
        ) : (
          <div className="w-full mx-auto mb-2">
            <FilterProduct slug={slug} />
            <ListProduct listProduct={listProduct} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MainListProduct;
