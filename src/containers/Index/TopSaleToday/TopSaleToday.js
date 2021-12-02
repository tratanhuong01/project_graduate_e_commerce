import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemProductIndex from "../../../components/General/ItemProduct/ItemProductIndex";
import BannerTopSaleToday from "../../../components/Index/BannerSmartWatch/BannerTopSaleToday";
import api from "../../../Utils/api";

function TopSaleToday(props) {
  //
  const [banner, setBanner] = useState(null);
  const headers = useSelector((state) => state.headers);
  const [data, setData] = useState(null);

  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const resultBanner = await api(`getBannerIndexShow`, "GET", null, headers);
      const resultProduct = await api(`getProductSaleToday`, "GET", null, headers);
      if (unmounted) return;
      setBanner(resultBanner.data);
      if (resultProduct.data) {
        const productLeft = [...resultProduct.data].slice(0, 2);
        const productRight = [...resultProduct.data].slice(2, 4);
        setData({
          productLeft,
          productRight
        })
      }
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
      {data && <div className="w-full">
        <div className="w-full flex p-2">
          {banner && <BannerTopSaleToday banner={banner} position="left" />}
          <div className="w-full lg:w-1/2 flex p-2 pt-0 items-center">
            {data ? data.productLeft ? data.productLeft.map((product, index) => {
              return <ItemProductIndex product={product} key={index} />;
            }) : "" : ""}
          </div>
        </div>
        <div className="w-full flex p-2">
          <div className="w-full lg:w-1/2 flex p-2 pt-0 items-center">
            {data ? data.productRight ? data.productRight.map((product, index) => {
              return <ItemProductIndex product={product} key={index} />;
            }) : "" : ""}
          </div>
          {banner && <BannerTopSaleToday banner={banner} position="right" />}
        </div>
      </div>}
    </div>
  );
}

export default TopSaleToday;
