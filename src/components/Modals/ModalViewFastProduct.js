import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductView from "../../containers/DetailProduct/ProductView/ProductView";
import ModalWrapper from "../../containers/ModalWrapper";

function ModalViewFastProduct(props) {
  //
  const product = useSelector((state) => state.product);
  useEffect(() => {}, [product]);
  //
  return (
    <ModalWrapper
      title="Xem chi tiết sản phẩm"
      className="w-11/12 xl:w-9/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-lg z-50 overflow-y-auto scrollbar-css lg:overflow-hidden"
      style={{ maxHeight: "90vh" }}
    >
      <div className="w-full flex mb-2">
        <ProductView products={product.modal.productCurrent} />
      </div>
    </ModalWrapper>
  );
}

export default ModalViewFastProduct;
