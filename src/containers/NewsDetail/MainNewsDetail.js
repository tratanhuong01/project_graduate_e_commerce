import React from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import NewsDetailLeft from "../../components/NewsDetail/NewsDetailLeft/NewsDetailLeft";
import NewsDetailRight from "../../components/NewsDetail/NewsDetailRight/NewsDetailRight";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { PAGE_NEWS } from "../../constants/Config";

function MainNewsDetail(props) {
  //
  const { newsDetail } = props;
  //
  return (
    <div className="w-full">
      <div className="w-full">
        <BreadcrumbsItem to={`${PAGE_NEWS}/${newsDetail.news.slug}`}>
          {newsDetail.news.title}
        </BreadcrumbsItem>
        <LevelUrl />
        <hr className="my-2"></hr>
        <div className="xl:w-4/5 w-full mx-auto p-4 flex flex-col lg:flex-row">
          <NewsDetailLeft newsDetail={newsDetail} />
          <NewsDetailRight newsDetail={newsDetail} />
        </div>
      </div>
    </div>
  );
}

export default MainNewsDetail;
