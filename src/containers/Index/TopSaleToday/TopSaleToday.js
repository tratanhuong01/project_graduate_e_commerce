import React, { useEffect } from "react";
import BannerTopSaleToday from "../../../components/Banner/BannerIndex/BannerSmartWatch/BannerTopSaleToday";
import ItemProductIndex from "../../../components/General/ItemProduct/ItemProductIndex";

function TopSaleToday(props) {
  //
  const { products } = props;
  const productLeft = [...products].slice(0, 2);
  const productRight = [...products].slice(2, 4);
  useEffect(() => {}, [products]);
  //
  return (
    <div className="w-full xl:w-4/5 mx-auto">
      <p
        className="p-8 italic font-bold text-4xl text-center 
        text-organce cursor-pointer"
      >
        Giá sốc{" "}
        <i className="fas fa-bolt bg-transparent mx-2 text-5xl transform"></i>{" "}
        hôm nay
      </p>
      <div className="w-full">
        <div className="w-full flex p-2">
          <BannerTopSaleToday />
          <div className="w-full lg:w-1/2 flex p-2 pt-0 items-center">
            {productRight.map((product, index) => {
              return <ItemProductIndex product={product} key={index} />;
            })}
          </div>
        </div>
        <div className="w-full flex p-2">
          <div className="w-full lg:w-1/2 flex p-2 pt-0 items-center">
            {productLeft.map((product, index) => {
              return <ItemProductIndex product={product} key={index} />;
            })}
          </div>
          <BannerTopSaleToday />
        </div>
      </div>
    </div>
  );
}

export default TopSaleToday;
