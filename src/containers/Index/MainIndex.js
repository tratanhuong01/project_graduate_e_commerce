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
      <HorizontalCategory
        className="xl:w-4/5 mx-auto w-full flex flex-wrap my-3 justify-center text-gray-800"
        categorys={products.listCategoryByGroupProduct}
      />
      <TopSell products={products.listProductTopSell[0]} />
      <Rule />
      <TopSaleToday products={products.listProductSaleToday} />
      <BannerAds />
      {products.listProductByCategory.map((listProduct, index) => {
        return listProduct.listProductCategory.length <= 0 ? (
          ""
        ) : (
          <CategoryProduct products={listProduct} key={index} />
        );
      })}
      <News news={products.newsList} />
    </div>
  );
}

export default MainIndex;
