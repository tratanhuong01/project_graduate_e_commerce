import React from "react";

function NumberProduct(props) {
  //
  const { orders } = props;
  //
  return (
    <p
      className="text-2xl font-semibold py-5 border-b-2 border-solid border-gray-200 
        flex"
    >
      Đơn hàng ({orders.list.length} sản phẩm)&nbsp;&nbsp;&nbsp;
      <button
        type="button"
        className="bg px-6 py-2 bg-organce 
        text-white rounded-lg text-base font-semibold xl:hidden"
      >
        Hiện sản phẩm
      </button>
    </p>
  );
}

export default NumberProduct;
