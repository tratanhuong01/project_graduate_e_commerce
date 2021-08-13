import React from "react";
import { useSelector } from "react-redux";
import ItemProduct from "../../components/General/ItemProduct/ItemProduct";

function ListProduct(props) {
  //
  const states = useSelector((state) => {
    return {
      listProduct: state.listProduct,
    };
  });
  const { listProduct } = states;
  //
  return (
    <div className="w-full md:w-4/5 mx-auto xl:w-3/4">
      <p className="mb-6 text-2xl pl-2 font-semibold">Tất cả sản phẩm</p>
      <div className="w-full flex flex-wrap my-4 z-10">
        {listProduct.products.map((product, index) => {
          return <ItemProduct product={product} key={index} />;
        })}
      </div>
    </div>
  );
}

export default ListProduct;
