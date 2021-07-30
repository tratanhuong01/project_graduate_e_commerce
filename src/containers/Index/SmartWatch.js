import React from "react";
import BannerSmartWatch from "../../components/Banner/BannerIndex/BannerSmartWatch/BannerSmartWatch";
import TitleMain from "../../components/General/TitleMain/TitleMain";
import ItemProductIndex from "../../components/General/ItemProduct/ItemProductIndex";

function SmartWatch(props) {
  //
  //
  return (
    <div className="w-full md:w-11/12 xl:w-4/5 mx-auto p-4">
      <TitleMain Content={"SMART WATCH"} />
      <div className="w-full">
        <div className="w-full flex p-2">
          <BannerSmartWatch />
          <div className="w-full xl:w-1/2 flex p-2 pt-0">
            <ItemProductIndex />
            <ItemProductIndex />
          </div>
        </div>
        <div className="w-full flex p-2">
          <div className="w-full xl:w-1/2 flex p-2 pt-0">
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
