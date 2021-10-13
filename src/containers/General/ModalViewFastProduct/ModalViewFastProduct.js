import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CloseModal from "../../../components/General/CloseModal/CloseModal";
import ProductView from "../../DetailProduct/ProductView/ProductView";

function ModalViewFastProduct(props) {
  //
  const states = useSelector((state) => {
    return {
      product: state.product,
    };
  });
  const { product } = states;

  useEffect(() => {}, [product]);
  //
  return (
    <div
      className="w-11/12 xl:w-9/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-lg z-50 overflow-y-auto scrollbar-css lg:overflow-hidden"
      style={{ maxHeight: "90vh" }}
    >
      <div className="w-full relative px-2 py-8 bg-white dark:bg-dark-second rounded-lg">
        <CloseModal />
        <div className="w-full flex mt-5 mb-2">
          <ProductView products={product.modal.productCurrent} />
        </div>
      </div>
    </div>
  );
}

export default ModalViewFastProduct;
