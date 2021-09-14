import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainListProduct from "../../containers/ListProduct/MainListProduct";
// import Loading from "../../components/General/Loading/Loading";
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
    const timeOut = setTimeout(() => {
      dispatch(
        listProductsAction.loadListProductRequest({
          slugCategoryProduct: slugCategoryProduct,
          slugGroupProduct:
            typeof slugGroupProduct === "undefined" ? null : slugGroupProduct,
        })
      );
    }, 500);

    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slugCategoryProduct, slugGroupProduct]);
  useEffect(() => {}, [listProduct.slug]);
  useResetPage("Sản phẩm");
  //
  return (
    <>
      <MainListProduct slug={listProduct.slug} />;
    </>
  );
}

export default ListProduct;
