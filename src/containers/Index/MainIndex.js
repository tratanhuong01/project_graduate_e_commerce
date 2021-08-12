import React from "react";
import HeaderIndex from "../../components/Header/HeaderIndex/HeaderIndex";
import BannerIndex from "../../components/Banner/BannerIndex/BannerIndex";
import TopSell from "./TopSell";
import Rule from "../General/Rule";
import SmartWatch from "./SmartWatch";
import BannerAds from "../../components/Banner/BannerIndex/BannerAds/BannerAds";
import News from "./News";
import ReciviceInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import CategoryProduct from "../../components/General/CategoryProduct/CategoryProduct";
function MainIndex(props) {
  //
  const { products } = props;
  //
  return (
    <div className="w-full">
      <div className="w-full relative">
        <HeaderIndex />
        {/* <BannerIndex /> */}
      </div>
      <div className="w-full">
        <TopSell />
        <Rule />
        <SmartWatch />
        <BannerAds />
        {products.listProductByCategory.map((listProduct, index) => {
          return <CategoryProduct products={listProduct} key={index} />;
        })}
        <News />
        <ReciviceInfo />
        <EndFooter />
      </div>
    </div>
  );
}

export default MainIndex;
