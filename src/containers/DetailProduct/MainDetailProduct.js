import React, { useEffect } from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import ProductView from "./ProductView/ProductView";
import DescribeProduct from "../../components/DetailProduct/ProductView/DescribeProduct/DescribeProduct";
import NewsDetailProduct from "../../components/DetailProduct/ProductView/NewsDetailProduct/NewsDetailProduct";
import RateComment from "../../components/DetailProduct/ProductView/RateComment/RateComment";

function MainDetailProduct(props) {
  //
  const { products } = props;
  //
  useEffect(() => {
    //
    document.title = products.nameLineProduct;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="w-full bg-gray-100">
      <LevelUrl />
      <div className="w-full xl:w-4/5 mx-auto p-4 bg-white">
        <ProductView products={products} />
        <div className="w-full flex my-5 lg:flex-row flex-col">
          <div className="w-full lg:w-7/12">
            <DescribeProduct products={products} />
            <RateComment products={products} />
          </div>
          <div className="w-full lg:w-5/12">
            <NewsDetailProduct />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDetailProduct;
