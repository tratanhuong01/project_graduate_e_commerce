import React, { useEffect, useState } from "react";
import MainNewsDetail from "../../containers/NewsDetail/MainNewsDetail";
import Loading from "../../components/General/Loading/Loading";
import useResetPage from "../../hook/useResetPage";
import * as newsApi from "../../api/newsApi";
function NewsDetail(props) {
  //
  const { match } = props;
  const [newsDetail, setNewsDetail] = useState(null);
  useEffect(() => {
    //
    let mounted = true;
    const fetch = async () => {
      window.scrollTo(0, 0);
      await newsApi.updateViewNews(match.match.params.slug);
      const result = await newsApi.getNewsBySlug(match.match.params.slug);
      if (result.data.news) document.title = result.data.news.title;
      setNewsDetail(result.data);
    };
    if (mounted) fetch();
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);
  useResetPage(null);
  //
  return newsDetail ? (
    <>
      <MainNewsDetail newsDetail={newsDetail} />
    </>
  ) : (
    <Loading />
  );
}

export default NewsDetail;
