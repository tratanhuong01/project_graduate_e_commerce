import React from "react";
import CloseModal from "../../../components/General/CloseModal/CloseModal";
import ProductView from "../../DetailProduct/ProductView";

function ModalViewFastProduct(props) {
  //
  //
  return (
    <div
      className="w-11/12 xl:w-9/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-lg z-50 overflow-y-auto scrollbar-css"
      style={{ maxHeight: "90vh" }}
    >
      <div className="w-full relative p-2 bg-white rounded-lg">
        <CloseModal />
        <div className="w-full flex mt-5 mb-2">
          <ProductView />
        </div>
      </div>
    </div>
  );
}

export default ModalViewFastProduct;
