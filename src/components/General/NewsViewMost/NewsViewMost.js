import React, { useEffect, useState } from "react";
import api from "../../../Utils/api";
import ItemNewsViewMost from "./ItemNewsViewMost/ItemNewsViewMost";

function NewsViewMost(props) {
  const [news, setNews] = useState(null);
  useEffect(() => {
    //
    let mounted = true;
    const fetch = async () => {
      const result = await api("getBestNews", "GET", null);
      setNews(result.data);
    };
    if (mounted) {
      fetch();
    }
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return news ? (
    <>
      <div className="mb-8 ml-2">
        <span className="py-2 border-b-2 border-solid border-organce font-semibold text-xl text-gray-600">
          YÊU THÍCH
        </span>
      </div>
      <div className="w-full my-4 flex-wrap flex">
        {news.map((newData, index) => {
          return (
            <div className="w-full md:w-1/2 xl:w-full" key={index}>
              <ItemNewsViewMost newData={newData} />
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <div className="w-full flex justify-center items-center p-5">
      <span
        className="fas fa-spinner fa-spin text-gray-600 
      text-2xl flex items-center"
      ></span>
    </div>
  );
}

export default NewsViewMost;
