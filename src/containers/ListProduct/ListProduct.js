import React from "react";
import ItemProduct from "../../components/General/ItemProduct/ItemProduct";

function ListProduct(props) {
  //
  //
  return (
    <div className="w-full md:w-4/5 mx-auto xl:w-3/4">
      <p className="mb-6 text-2xl pl-2 font-semibold">Tất cả sản phẩm</p>
      <div className="w-full flex flex-wrap my-4 z-10">
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
      </div>
    </div>
  );
}

export default ListProduct;
