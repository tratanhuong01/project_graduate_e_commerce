import React from "react";
import Header from "../../components/Header/Header";
import TopSell from "./TopSell";
import Rule from "../General/Rule";
import SmartWatch from "./SmartWatch";
import BannerAds from "../../components/Banner/BannerIndex/BannerAds/BannerAds";
import News from "./News";
import ReciviceInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import CategoryProduct from "../../components/General/CategoryProduct/CategoryProduct";
import CategoryIndex from "./CategoryIndex";
import BannerIndex from "../../components/Banner/BannerIndex/BannerIndex";
function MainIndex(props) {
  //
  const { products } = props;
  //
  return (
    <div className="w-full">
      <div className="w-full relative">
        <Header />
      </div>
      <div className="w-full">
        <CategoryIndex />
        <img
          src="https://bizweb.dktcdn.net/100/420/160/themes/825846/assets/feature_banner.jpg?1628694566095"
          alt=""
          className="w-full xl:w-4/5 mx-auto my-3 h-16"
        />
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
