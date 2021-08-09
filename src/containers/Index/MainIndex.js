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
  //
  return (
    <div className="w-full">
      <div id="main" className="w-full relative">
        <HeaderIndex />
        <BannerIndex />
      </div>
      <div className="w-full">
        <TopSell />
        <Rule />
        <SmartWatch />
        <BannerAds />
        <CategoryProduct />
        <CategoryProduct />
        <CategoryProduct />
        <News />
        <ReciviceInfo />
        <EndFooter />
      </div>
    </div>
  );
}

export default MainIndex;
