import React from "react";
import CloseModal from "../../../General/CloseModal/CloseModal";

function ModalCartAddedTop(props) {
  return (
    <div className="w-full bg-gray-200 relative rounded-t-lg p-2 border-b-2 border-gray-300 border-solid">
      <p
        className="mb-2 font-semibold text-xl hover:text-organce flex 
        items-center cursor-pointer pt-1"
      >
        <i className="bx bx-check text-2xl mr-3"></i>Sản phẩm vừa được thêm vào
        giỏ hàng
      </p>
      <CloseModal />
    </div>
  );
}

export default ModalCartAddedTop;
