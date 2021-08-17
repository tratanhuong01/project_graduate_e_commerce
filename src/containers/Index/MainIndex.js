import React, { useState } from "react";
import Header from "../../components/Header/Header";
import TopSell from "./TopSell";
import Rule from "../General/Rule";
import TopSaleToday from "./TopSaleToday";
import BannerAds from "../../components/Banner/BannerIndex/BannerAds/BannerAds";
import News from "./News";
import ReciviceInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import CategoryProduct from "../../components/General/CategoryProduct/CategoryProduct";
import CategoryIndex from "./CategoryIndex";
import HorizontalCategory from "../../components/Index/HorizontalCategory/HorizontalCategory";
// import BannerIndex from "../../components/Banner/BannerIndex/BannerIndex";
function MainIndex(props) {
  //
  const { products } = props;
  const [menu, setMenu] = useState(false);
  //
  return (
    <div className="w-full">
      <Header setMenu={setMenu} menu={menu} />
      <div className="w-full">
        <CategoryIndex
          products={products}
          menu={menu}
          setMenu={(state) => setMenu(state)}
        />
        <HorizontalCategory products={products} />
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
