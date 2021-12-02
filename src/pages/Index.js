import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../actions/modal/index";
import TopSell from "../containers/Index/TopSell/TopSell";
import useResetPage from "../hook/useResetPage";
import Rule from "../containers/General/Rule";
import TopSaleToday from "../containers/Index/TopSaleToday/TopSaleToday";
import News from "../containers/Index/News/News";
import SliderProduct from "../containers/Index/SliderProduct/SliderProduct";
import ProductByCategory from "../containers/Index/ProductByCategory/ProductByCategory";
import HorizontalCategory from "../components/Index/HorizontalCategory/HorizontalCategory";

function Index(props) {
  //
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  useResetPage("Trang chủ");
  useEffect(() => {
    //
    const fetch = async () => {
      try {
        if (!modal.data) dispatch(modalsAction.setPopupAds());
      } catch (error) {
        throw error;
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

export default Index;
