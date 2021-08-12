import React from "react";
import Header from "../../components/Header/Header";
import Rule from "../../containers/General/Rule";
import ReciveInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import ItemProductSearch from "../../components/General/ItemProduct/ItemProductSearch";
import NotifyNumberProductSearch from "../../components/Search/NotifyNumberProductSearch";

function MainSearch(props) {
  //
  //
  return (
    <div className="w-full">
      <div className="w-full relative text-white md:text-black">
        <Header />
      </div>
      <div className="w-full bg-gray-100">
        <div className="xl:w-4/5 w-full mx-auto p-4">
          <NotifyNumberProductSearch />
          <div className="w-full flex flex-wrap">
            <ItemProductSearch />
          </div>
        </div>
        <Rule />
        <ReciveInfo />
        <EndFooter />
      </div>
    </div>
  );
}

export default MainSearch;
