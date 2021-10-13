import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainDetailProduct from "../containers/DetailProduct/MainDetailProduct";
import * as productsAction from "../actions/product/index";
import Loading from "../components/General/Loading/Loading";
import useResetPage from "../hook/useResetPage";

function DetailProduct(props) {
  //
  const dispatch = useDispatch();
  const { slug } = props.match.params;
  const states = useSelector((state) => {
    return {
      product: state.product,
      user: state.user,
    };
  });
  const { product } = states;
  useResetPage(null);
  useEffect(() => {
    //
    window.scrollTo(0, 0);
    dispatch(productsAction.loadProductChooseRequest(slug, 0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);
  //
  return product.view.productCurrent ? (
    <>
      <MainDetailProduct products={product.view.productCurrent} slug={slug} />
    </>
  ) : (
    <Loading />
  );
}

export default DetailProduct;
