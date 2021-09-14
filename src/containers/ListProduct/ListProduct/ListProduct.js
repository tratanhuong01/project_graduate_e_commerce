import React from "react";
import ItemProduct from "../../../components/General/ItemProduct/ItemProduct";
import LoadingListProduct from "./LoadingListProduct/LoadingListProduct";
import no__result from "../../../assets/images/no__result.gif";

function ListProduct(props) {
  //
  const { listProduct } = props;
  //
  return !listProduct.loading ? (
    listProduct.products.length > 0 ? (
      <div className="w-full mx-auto ">
        <div className="w-full flex flex-wrap my-4 z-10">
          {listProduct.products.map((product, index) => {
            return <ItemProduct product={product} key={index} />;
          })}
        </div>
        <div className="w-full flex justify-center my-2"></div>
      </div>
    ) : (
      <div className="w-full flex flex-col my-5 items-center h-80 justify-center">
        <img src={no__result} alt="" className="w-80 object-cover" />
        <p className="text-center mt-3 text-gray-600 font-semibold">
          Không tìm thấy sản phẩm cho bộ lọc
        </p>
      </div>
    )
  ) : (
    <LoadingListProduct />
  );
}

export default ListProduct;
