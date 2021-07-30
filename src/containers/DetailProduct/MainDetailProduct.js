import React from "react";
import HeaderNormal from "../../components/Header/HeaderNormal/HeaderNormal";
import Rule from "../General/Rule";
import ReciviceInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import ProductView from "./ProductView";
import OtherProduct from "../../components/DetailProduct/OtherProduct/OtherProduct";
import DescribeProduct from "../../components/DetailProduct/ProductView/DescribeProduct/DescribeProduct";

function MainDetailProduct(props) {
  return (
    <div className="w-full">
      <div className="w-full relative text-white md:text-black z-30">
        <HeaderNormal />
      </div>
      <div className="w-full bg-gray-100">
        <LevelUrl />
        <hr className="my-2"></hr>
        <div className="w-full xl:w-4/5 mx-auto p-4">
          <ProductView />
          <DescribeProduct />
          <OtherProduct />
        </div>
        <Rule />
        <ReciviceInfo />
        <EndFooter />
      </div>
    </div>
  );
}

export default MainDetailProduct;
