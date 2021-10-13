import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../Utils/api";
import Pagination from "../../General/Pagination/Pagination";
import ItemChildNews from "../ItemChildNews/ItemChildNews";

function Highlights(props) {
  //
  const [length, setLength] = useState(null);
  const [news, setNews] = useState(null);
  const [index, setIndex] = useState(0);
  const headers = useSelector((state) => state.headers);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      let data = null;
      if (!length) data = await api(`newsPaginationAll`, "GET", null, headers);
      const result = await api(`newsPagination?limit=${9}&offset=${index}`);
      if (unmounted) return;
      if (data) setLength(data.data);
      setNews(result.data);
      if (length) window.scrollTo(0, 700);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);
  //
  return news ? (
    <div className="w-full lg:w-2/3">
      <div className="mb-8 ml-2">
        <span className="py-2 border-b-2 border-solid border-organce font-semibold text-xl text-gray-600 dark:text-white">
          NỔI BẬT
        </span>
      </div>
      <div className="w-full flex flex-wrap">
        {news.map((newData, index) => {
          return <ItemChildNews newData={newData} key={index} />;
        })}
      </div>
      <div className="w-full flex justify-center">
        <Pagination
          index={index}
          length={length}
          dispatch={(index) => setIndex(index)}
          limit={9}
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Highlights;
