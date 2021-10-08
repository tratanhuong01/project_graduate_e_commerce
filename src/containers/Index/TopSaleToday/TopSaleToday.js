import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BannerTopSaleToday from "../../../components/Banner/BannerIndex/BannerSmartWatch/BannerTopSaleToday";
import ItemProductIndex from "../../../components/General/ItemProduct/ItemProductIndex";
import api from "../../../Utils/api";

function TopSaleToday(props) {
  //
  const [banner, setBanner] = useState(null);
  const headers = useSelector((state) => state.headers);
  const { products } = props;
  const productLeft = [...products].slice(0, 2);
  const productRight = [...products].slice(2, 4);
  useEffect(() => {}, [products]);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(`getBannerIndexShow`, "GET", null, headers);
      if (unmounted) return;
      setBanner(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          {banner && <BannerTopSaleToday banner={banner} position="left" />}
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
          {banner && <BannerTopSaleToday banner={banner} position="right" />}
        </div>
      </div>
    </div>
  );
}

export default TopSaleToday;
