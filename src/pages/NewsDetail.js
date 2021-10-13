import React, { useEffect, useState } from "react";
import Loading from "../components/General/Loading/Loading";
import * as newsApi from "../api/newsApi";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LevelUrl from "../components/General/LevelUrl/LevelUrl";
import NewsDetailLeft from "../components/NewsDetail/NewsDetailLeft/NewsDetailLeft";
import NewsDetailRight from "../components/NewsDetail/NewsDetailRight/NewsDetailRight";
import { PAGE_NEWS } from "../constants/Config";

function NewsDetail(props) {
  //
  const { match } = props;
  const [newsDetail, setNewsDetail] = useState(null);
  useEffect(() => {
    //
    let unmounted = false;
    const fetch = async () => {
      window.scrollTo(0, 0);
      await newsApi.updateViewNews(match.match.params.slug);
      const result = await newsApi.getNewsBySlug(match.match.params.slug);
      if (unmounted) return;
      if (result.data.news) document.title = result.data.news.title;
      setNewsDetail(result.data);
    };

    fetch();
    return () => (unmounted = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);
  //
  return newsDetail ? (
    <div className="w-full">
      <div className="w-full">
        <BreadcrumbsItem
          to={`${PAGE_NEWS}/${newsDetail.news && newsDetail.news.slug}`}
        >
          {newsDetail.news && newsDetail.news.title}
        </BreadcrumbsItem>
        <LevelUrl />
        <hr className="my-2"></hr>
        <div className="xl:w-4/5 w-full mx-auto p-4 flex flex-col lg:flex-row">
          <NewsDetailLeft newsDetail={newsDetail} />
          <NewsDetailRight newsDetail={newsDetail} />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default NewsDetail;
