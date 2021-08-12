import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import MainDetailProduct from "../../containers/DetailProduct/MainDetailProduct";
import Modal from "../../containers/Modal";
import * as productsAction from "../../actions/product/index";
import * as cartsAction from "../../actions/cart/index";

function DetailProduct(props) {
  //
  const dispatch = useDispatch();
  const { match } = props;
  const states = useSelector((state) => {
    return {
      product: state.product,
      user: state.user,
    };
  });
  const { product, user } = states;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    //
    const fetch = async () => {
      const slug = match.params.slug;
      dispatch(productsAction.loadProductChooseRequest(slug));
      dispatch(modalsAction.closeModal());
      dispatch(cartsAction.loadCartRequest(user));
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    product.view.productCurrent && (
      <>
        <MainDetailProduct products={product.view.productCurrent} />
        <Modal />
      </>
    )
  );
}

export default DetailProduct;
