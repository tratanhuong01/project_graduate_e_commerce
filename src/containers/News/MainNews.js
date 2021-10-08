import React from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import InfoNews from "../../components/News/InfoNews/InfoNews";
import NewsViewMost from "../../components/General/NewsViewMost/NewsViewMost";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { PAGE_NEWS } from "../../constants/Config";
import Highlights from "../../components/News/Highlights/Highlights";
import NewsByCategory from "../../components/News/NewsByCategory/NewsByCategory";

function MainNews(props) {
  //
  //
  return (
    <div className="w-full">
      <BreadcrumbsItem to={PAGE_NEWS}>Tin tức</BreadcrumbsItem>
      <LevelUrl />
      <hr className="my-2"></hr>
      <div className="xl:w-4/5 w-full mx-auto p-4">
        <InfoNews />
      </div>
      <div className="xl:w-4/5 w-full flex flex-col lg:flex-row mx-auto px-4 justify-center">
        <Highlights />
        <div className="w-full lg:w-1/3">
          <NewsViewMost />
        </div>
      </div>
      <NewsByCategory />
    </div>
  );
}

export default MainNews;
