import React, { useState } from "react";
import Header from "../../components/Header/Header";
import TopSell from "./TopSell/TopSell";
import Rule from "../General/Rule";
import TopSaleToday from "./TopSaleToday/TopSaleToday";
import BannerAds from "../../components/Banner/BannerIndex/BannerAds/BannerAds";
import News from "./News/News";
import ReciviceInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import CategoryProduct from "../../components/General/CategoryProduct/CategoryProduct";
import HorizontalCategory from "../../components/Index/HorizontalCategory/HorizontalCategory";
import SliderProduct from "./SliderProduct/SliderProduct";
import MainCategory from "../../components/Index/CategoryIndex/MainCategory/MainCategory";

function MainIndex(props) {
  //
  const { products, subClassMenu } = props;
  const [menu, setMenu] = useState(false);
  //
  return (
    <div className="w-full">
      <Header setMenu={setMenu} menu={menu} subClassMenu={subClassMenu} />
      <div className="w-full">
        <SliderProduct />
        <HorizontalCategory products={products} />
        <MainCategory menu={menu} setMenu={setMenu} />
        <img
          src="https://bizweb.dktcdn.net/100/420/160/themes/825846/assets/feature_banner.jpg?1628694566095"
          alt=""
          className="w-full xl:w-4/5 px-3 mx-auto my-3 h-16"
        />
        <TopSell />
        <Rule />
        <TopSaleToday products={products.listProductSaleToday} />
        <BannerAds />
        {products.listProductByCategory.map((listProduct, index) => {
          return <CategoryProduct products={listProduct} key={index} />;
        })}
        <News news={products.newsList} />
        <ReciviceInfo />
        <EndFooter />
      </div>
    </div>
  );
}

export default MainIndex;
