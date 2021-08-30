import React, { useEffect, useState } from "react";
import MainNewsDetail from "../../containers/NewsDetail/MainNewsDetail";
import api from "../../Utils/api";
import Loading from "../../components/General/Loading/Loading";
import useResetPage from "../../hook/useResetPage";

function NewsDetail(props) {
  //
  const { match } = props;
  const [newsDetail, setNewsDetail] = useState(null);
  useEffect(() => {
    //
    let mounted = true;
    const fetch = async () => {
      window.scrollTo(0, 0);
      let formData = new FormData();
      formData.append("slug", match.match.params.slug);
      await api("updateViewNews", "PUT", formData);
      const result = await api("getNewsBySlug", "POST", formData);
      if (result.data) document.title = result.data.news.title;
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
