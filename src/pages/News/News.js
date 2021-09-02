import React, { useEffect, useState } from "react";
import Loading from "../../components/General/Loading/Loading";
import MainNews from "../../containers/News/MainNews";
import useResetPage from "../../hook/useResetPage";
import * as newsApi from "../../api/newsApi";
function News(props) {
  //
  useResetPage("Tin tức");
  const [news, setNews] = useState(null);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await newsApi.getNewsPage();
      if (unmounted) return;
      setNews(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return news ? <MainNews news={news} /> : <Loading />;
}

export default News;
