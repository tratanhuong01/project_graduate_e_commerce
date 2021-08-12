import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Rule from "../General/Rule";
import ReciviceInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import ProductView from "./ProductView";
import DescribeProduct from "../../components/DetailProduct/ProductView/DescribeProduct/DescribeProduct";
// import CategoryProduct from "../../components/General/CategoryProduct/CategoryProduct";
import NewsDetailProduct from "../../components/DetailProduct/ProductView/NewsDetailProduct/NewsDetailProduct";
import RateComment from "../../components/DetailProduct/ProductView/RateComment/RateComment";
import ViewProductWhenScroll from "./ViewProductWhenScroll";

function MainDetailProduct(props) {
  //
  const { products } = props;
  const [show, setShow] = useState(false);
  window.addEventListener("scroll", function () {
    const y = window.scrollY;
    if (y >= 600) setShow(true);
    else setShow(false);
  });
  //
  return (
    <div className="w-full">
      {show && <ViewProductWhenScroll products={products} />}
      <div className="w-full relative text-white md:text-black z-30">
        <Header />
      </div>
      <div className="w-full bg-gray-100">
        <LevelUrl />
        <div className="w-full xl:w-4/5 mx-auto p-4 bg-white">
          <ProductView products={products} />
          <div className="w-full flex my-5 lg:flex-row flex-col">
            <div className="w-full lg:w-7/12">
              <DescribeProduct />
              <RateComment />
            </div>
            <div className="w-full lg:w-5/12">
              <NewsDetailProduct />
            </div>
          </div>
        </div>
        {/* <CategoryProduct /> */}
        <Rule />
        <ReciviceInfo />
        <EndFooter />
      </div>
    </div>
  );
}

export default MainDetailProduct;
