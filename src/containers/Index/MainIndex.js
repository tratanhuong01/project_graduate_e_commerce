import React from "react";
import TopSell from "./TopSell/TopSell";
import Rule from "../General/Rule";
import TopSaleToday from "./TopSaleToday/TopSaleToday";
import BannerAds from "../../components/Banner/BannerIndex/BannerAds/BannerAds";
import News from "./News/News";
import CategoryProduct from "../../components/General/CategoryProduct/CategoryProduct";
import HorizontalCategory from "../../components/Index/HorizontalCategory/HorizontalCategory";
import SliderProduct from "./SliderProduct/SliderProduct";
function MainIndex(props) {
  //
  const { products } = props;
  //
  return (
    <div className="w-full">
      <SliderProduct />
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
    </div>
  );
}

export default MainIndex;
