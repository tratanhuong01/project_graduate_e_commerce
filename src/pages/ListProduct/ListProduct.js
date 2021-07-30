import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import MainListProduct from "../../containers/ListProduct/MainListProduct";
import Modal from "../../containers/Modal";

function ListProduct(props) {
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
      <MainListProduct />
      <Modal />
    </>
  );
}

export default ListProduct;
