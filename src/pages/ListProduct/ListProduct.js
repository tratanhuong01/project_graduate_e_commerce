import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainListProduct from "../../containers/ListProduct/MainListProduct";
import Loading from "../../components/General/Loading/Loading";
import * as listProductsAction from "../../actions/listProduct/index";
import useResetPage from "../../hook/useResetPage";

function ListProduct(props) {
  //
  const dispatch = useDispatch();
  const states = useSelector((state) => {
    return {
      listProduct: state.listProduct,
    };
  });
  const { slugCategoryProduct, slugGroupProduct } = props.match.match.params;
  const { listProduct } = states;
  useEffect(() => {
    //
    let unmounted = false;
    if (unmounted) return;
    dispatch(
      listProductsAction.loadListProductRequest({
        slugCategoryProduct: slugCategoryProduct,
        slugGroupProduct:
          typeof slugGroupProduct === "undefined" ? null : slugGroupProduct,
      })
    );
    return () => (unmounted = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slugCategoryProduct, slugGroupProduct]);
  useEffect(() => {}, [listProduct]);
  useResetPage("Sản phẩm");
  //
  return listProduct.products === null ? (
    <Loading />
  ) : (
    <MainListProduct slug={slugGroupProduct} />
  );
}

export default ListProduct;
