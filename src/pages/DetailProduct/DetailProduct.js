import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import MainDetailProduct from "../../containers/DetailProduct/MainDetailProduct";
import Modal from "../../containers/Modal";
import * as productsAction from "../../actions/product/index";
import * as cartsAction from "../../actions/cart/index";
import useScrollEvent from "../../hook/useScrollEvent";
import ScrollTop from "../../components/General/ScrollTop/ScrollTop";

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
  const { show, subClassMenu } = useScrollEvent();

  useEffect(() => {
    //
    let mounted = true;
    const fetch = async () => {
      const slug = match.params.slug;
      dispatch(productsAction.loadProductChooseRequest(slug, 0));
      dispatch(modalsAction.closeModal());
      dispatch(cartsAction.loadCartRequest(user));
    };
    if (mounted) fetch();
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);
  //
  return product.view.productCurrent ? (
    <>
      {show && <ScrollTop />}
      <MainDetailProduct
        products={product.view.productCurrent}
        subClassMenu={subClassMenu}
      />
      <Modal />
    </>
  ) : (
    "Not product"
  );
}

export default DetailProduct;
