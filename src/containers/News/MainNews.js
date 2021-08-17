import React from "react";
import Header from "../../components/Header/Header";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import Rule from "../../containers/General/Rule";
import ReciveInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import ItemChildNews from "../../components/News/ItemChildNews/ItemChildNews";
import InfoNews from "../../components/News/InfoNews/InfoNews";
import ItemCategoryNews from "../../components/News/ItemCategoryNews/ItemCategoryNews";
import NewsViewMost from "../../components/General/NewsViewMost/NewsViewMost";

function MainNews(props) {
  //
  //
  return (
    <div className="w-full">
      <Header />

      <div className="w-full">
        <LevelUrl />
        <hr className="my-2"></hr>
        <div className="xl:w-4/5 w-full mx-auto p-4">
          <InfoNews />
        </div>
        <div className="xl:w-4/5 w-full flex flex-col lg:flex-row mx-auto px-4 justify-center">
          <div className="w-full lg:w-2/3">
            <div className="mb-8 ml-2">
              <span className="py-2 border-b-2 border-solid border-organce font-semibold text-xl text-gray-600">
                NỔI BẬT
              </span>
            </div>
            <div className="w-full flex flex-wrap">
              <ItemChildNews />
              <ItemChildNews />
              <ItemChildNews />
              <ItemChildNews />
              <ItemChildNews />
              <ItemChildNews />
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <NewsViewMost />
          </div>
        </div>
        <div className="xl:w-4/5 w-full mx-auto p-4 flex flex-col lg:flex-row">
          <ItemCategoryNews />
          <ItemCategoryNews />
          <ItemCategoryNews />
        </div>
        <Rule />
        <ReciveInfo />
        <EndFooter />
      </div>
    </div>
  );
}

export default MainNews;
