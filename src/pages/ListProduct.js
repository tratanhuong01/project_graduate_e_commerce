import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainListProduct from "../containers/ListProduct/MainListProduct";
import Loading from "../components/General/Loading/Loading";
import * as listProductsAction from "../actions/listProduct/index";
import useResetPage from "../hook/useResetPage";
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
    dispatch(listProductsAction.loadListProduct(null));
    const timeOut = setTimeout(() => {
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
    }, 500);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slugCategoryProduct, slugGroupProduct, listProduct.slug]);
  useResetPage("Sản phẩm");

  //
  return (
    <>
      {listProduct.products ? (
        <MainListProduct slug={listProduct.slug} />
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ListProduct;
