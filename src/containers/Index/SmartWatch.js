import React from "react";
import BannerSmartWatch from "../../components/Banner/BannerIndex/BannerSmartWatch/BannerSmartWatch";
import ItemProductIndex from "../../components/General/ItemProduct/ItemProductIndex";

function SmartWatch(props) {
  //
  //
  return (
    <div className="w-full md:w-11/12 xl:w-4/5 mx-auto p-4">
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
          <BannerSmartWatch />
          <div className="w-full md:w-1/2 flex p-2 pt-0 items-center">
            <ItemProductIndex />
            <ItemProductIndex />
          </div>
        </div>
        <div className="w-full flex p-2">
          <div className="w-full md:w-1/2 flex p-2 pt-0 items-center">
            <ItemProductIndex />
            <ItemProductIndex />
          </div>
          <BannerSmartWatch />
        </div>
      </div>
    </div>
  );
}

export default SmartWatch;
