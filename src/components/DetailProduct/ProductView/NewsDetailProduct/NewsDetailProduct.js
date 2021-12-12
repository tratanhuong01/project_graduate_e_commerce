import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../../Utils/api";
import ItemNews from "../../../Index/News/NewsRight/ItemNews/ItemNews";

function NewsDetailProduct(props) {
  //
  const headers = useSelector((state) => state.headers);
  const [news, setNews] = useState(null);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(`getNewsByIdCategory`, "POST", "TINCONGNGHE", {
        ...headers,
        "Content-Type": "application/json",
      });
      if (unmounted) return;
      setNews(result.data);
    }
    fetch();
    return () => (unmounted = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      <p className="font-bold text-2xl px-2 mt-4">Tin tức nổi bật</p>
      {news && (
        <div className="w-full flex flex-wrap">
          <div className="item__news__detail py-0.5 px-2 mr-2 my-2 relative">
            {news.map((newData) => {
              return <ItemNews newData={newData} key={newData.id} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default NewsDetailProduct;
