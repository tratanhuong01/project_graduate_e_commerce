import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import MainDetailProduct from "../../containers/DetailProduct/MainDetailProduct";
import Modal from "../../containers/Modal";
import api from "../../Utils/api";

function DetailProduct(props) {
  //
  const dispatch = useDispatch();
  const { match } = props;
  const [productDetail, setProductDetail] = useState(null);
  useEffect(async () => {
    //
    const slug = match.params.slug;
    let formData = new FormData();
    formData.append("slug", slug);
    const result = await api("getProductBySlug", "POST", formData);
    setProductDetail(result.data);
    dispatch(modalsAction.closeModal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    productDetail && (
      <>
        <MainDetailProduct products={productDetail} />
        <Modal />
      </>
    )
  );
}

export default DetailProduct;
