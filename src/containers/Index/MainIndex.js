import React from "react";
import TopSell from "./TopSell/TopSell";
import Rule from "../General/Rule";
import TopSaleToday from "./TopSaleToday/TopSaleToday";
import News from "./News/News";
import HorizontalCategory from "../../components/Index/HorizontalCategory/HorizontalCategory";
import SliderProduct from "./SliderProduct/SliderProduct";
import ProductByCategory from "./ProductByCategory/ProductByCategory";

function MainIndex(props) {
  //
  //
  return (
    <div className="w-full">
      <SliderProduct />
      <HorizontalCategory
        className="xl:w-4/5 mx-auto w-full flex flex-wrap my-3 justify-center text-gray-800"
      />
      <TopSell />
      <Rule />
      <TopSaleToday />
      <ProductByCategory />
      <News />
    </div>
  );
}

export default MainIndex;
