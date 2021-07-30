import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import MainDetailProduct from "../../containers/DetailProduct/MainDetailProduct";
import Modal from "../../containers/Modal";

function DetailProduct(props) {
  //
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(modalsAction.closeModal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      <MainDetailProduct />
      <Modal />
    </>
  );
}

export default DetailProduct;
