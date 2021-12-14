import React, { useEffect, useState } from "react";
import NewsLeft from "../../../components/Index/News/NewsLeft/NewsLeft";
import NewsRight from "../../../components/Index/News/NewsRight/NewsRight";
import api from "../../../Utils/api";

function News(props) {
  //
  const [news, setNews] = useState(null);
  useEffect(() => {
    //
    let unmounted = false;
    const fetch = async () => {
      const result = await api(`getNewsIndex`, 'GET', null, {});
      if (unmounted) return;
      setNews(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    }
    //
  }, []);
  console.log(news);
  //
  return (
    news ? news.length > 0 && (
      <div className="xl:w-4/5 w-full flex flex-col sm:flex-row mx-auto p-4">
        <NewsLeft newData={news[0]} subClass={"lg:w-7/12 mr-10"} />
        <NewsRight news={news.length > 0 ? [...news].splice(1, 4) : null} subClass={"lg:w-5/12"} />
      </div>
    ) : ""
  );
}

export default News;
