import React from "react";
import ItemProductLoading from "../../../../components/General/ItemProduct/ItemProductLoading/ItemProductLoading";

function LoadingListProduct(props) {
  return (
    <div className="w-full mx-auto ">
      <div className="w-full flex flex-wrap my-4 z-10">
        <ItemProductLoading />
        <ItemProductLoading />
        <ItemProductLoading />
        <ItemProductLoading />
        <ItemProductLoading />
        <ItemProductLoading />
        <ItemProductLoading />
        <ItemProductLoading />
      </div>
    </div>
  );
}

export default LoadingListProduct;
