import React, { useEffect } from "react";
import MainListProduct from "../../containers/ListProduct/MainListProduct";
import Second from "../../containers/Second";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions/index";

function ListProduct(props) {
  //
  const states = useSelector((state) => {
    return {
      product: state.product,
      filterProduct: state.filterProduct,
    };
  });
  const { product } = states;
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(actions.closeModal());
    const getAll = (products) => {
      if (products.length > 0) {
        dispatch(actions.getAllBrandProduct(products));
        dispatch(actions.getAllColorProduct(products));
        dispatch(actions.getAllSizeProduct(products));
      }
    };
    getAll(product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      <MainListProduct />
      <Second />
    </>
  );
}

export default ListProduct;
