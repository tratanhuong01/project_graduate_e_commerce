import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListProductWrapper from "../containers/ListProduct/ListProduct/ListProduct";
import * as listProductsAction from "../actions/listProduct/index";
import useResetPage from "../hook/useResetPage";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { PAGE_PRODUCT } from "../constants/Config";
import GroupProduct from "../components/ListProduct/GroupProduct/GroupProduct";
import CategoryProduct from "../components/ListProduct/CategoryProduct/CategoryProduct";
import FilterProduct from "../components/ListProduct/FilterProduct/FilterProduct";
import LevelUrl from "../components/General/LevelUrl/LevelUrl";
function ListProduct(props) {
  //
  const dispatch = useDispatch();
  const { slugCategoryProduct, slugGroupProduct } = props.match.match.params;
  const { headers, listProduct } = useSelector((state) => {
    return {
      listProduct: state.listProduct,
      headers: state.headers,
    };
  });
  useEffect(() => {
    //
    dispatch(listProductsAction.loadingListProduct(true));
    dispatch(listProductsAction.loadListProduct(null));
    dispatch(
      listProductsAction.loadListProductRequest(
        {
          slugCategoryProduct: slugCategoryProduct,
          slugGroupProduct:
            typeof slugGroupProduct === "undefined"
              ? slugCategoryProduct
              : slugGroupProduct,
        },
        headers
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slugCategoryProduct, slugGroupProduct, listProduct.slug]);
  useResetPage("Sản phẩm");
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
          {listProduct.slug && (
            <>{listProduct.type === true && !listProduct.loading && <GroupProduct />}</>
          )}
          {!listProduct.slug === null && !listProduct !== "" ? < CategoryProduct /> : !listProduct.slug && < CategoryProduct />}
          {listProduct.products && <FilterProduct />}
          <ListProductWrapper />
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
