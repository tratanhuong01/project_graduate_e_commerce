import React from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LevelUrl from "../components/General/LevelUrl/LevelUrl";
import NewsViewMost from "../components/General/NewsViewMost/NewsViewMost";
import Highlights from "../components/News/Highlights/Highlights";
import InfoNews from "../components/News/InfoNews/InfoNews";
import NewsByCategory from "../components/News/NewsByCategory/NewsByCategory";
import { PAGE_NEWS } from "../constants/Config";
import useResetPage from "../hook/useResetPage";
function News(props) {
  //
  useResetPage("Tin tức");
  //
  return (
    <>
      <BreadcrumbsItem to={PAGE_NEWS}>Tin tức</BreadcrumbsItem>
      <LevelUrl />
      <hr className="my-2"></hr>
      <div className="xl:w-4/5 w-full mx-auto p-4 hidden">
        <InfoNews />
      </div>
      <div className="xl:w-4/5 w-full flex flex-col lg:flex-row mx-auto px-4 justify-center">
        <Highlights />
        <div className="w-full lg:w-1/3">
          <NewsViewMost />
        </div>
      </div>
      <NewsByCategory />
    </>
  );
}

export default News;
