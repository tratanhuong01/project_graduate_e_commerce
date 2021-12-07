import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../Utils/api";
import NewsLeft from "../../Index/News/NewsLeft/NewsLeft";
import NewsRight from "../../Index/News/NewsRight/NewsRight";
// import NewsRight from "../../Index/News/NewsRight/NewsRight";

function ItemCategoryNews(props) {
  //
  const { category } = props;
  const [length, setLength] = useState(null);
  const [index, setIndex] = useState(0);
  const [news, setNews] = useState(null);
  const headers = useSelector((state) => state.headers);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      let data = null;
      try {
        if (!length)
          data = await api(
            `news/categoryNewsAll?idCategoryNews=${category.id}`,
            "GET",
            null,
            headers
          );
        const result = await api(
          `news/categoryNews?idCategoryNews=${category.id}&limit=${4}&offset=${index * 4
          }`
        );
        if (unmounted) return;
        if (data) setLength(data.data);
        setNews(result.data);
      } catch (error) {
        throw error;
      }
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);
  //
  return news ? (
    <div className="w-full lg:w-1/3 mx-2 dark:text-gray-300 flex-1">
      <div className="w-full h-10">
        <p
          className="py-2 text-xl font-semibold float-left border-b-2 border-solid 
          border-organce mb-5"
        >
          {category.nameCategoryNews}
        </p>
        <div className="flex float-right my-3">
          <button
            onClick={() => {
              if (index === 0) return;
              setIndex(index - 1);
            }}
            className={`w-6 h-6 rounded-full border-2 border-solid items-center border-gray-300 hover:bg-organce mx-0.5 flex justify-center hover:text-white ${index === 0 ? "cursor-not-allowed hover:bg-gray-500" : ""
              }`}
            disabled={index === 0 ? true : false}
          >
            <i className="bx bx-chevron-left"></i>
          </button>
          <button
            onClick={() => {
              if (index + 1 * 4 >= length) return;
              setIndex(index + 1);
            }}
            className={`w-6 h-6 rounded-full border-2 border-solid items-center border-gray-300 hover:bg-organce mx-0.5 flex justify-center hover:text-white ${index + 1 * 4 >= length
              ? "cursor-not-allowed hover:bg-gray-500 "
              : ""
              }`}
            disabled={index + 1 * 4 >= length ? true : false}
          >
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>
      <NewsLeft newData={news[0]} subClass="h-52" subClass__={"-bottom-3"} />
      <br />
      {news.filter((dt, pos) => pos !== 0).length > 0 && (
        <NewsRight news={news.filter((dt, pos) => pos !== 0)} />
      )}
    </div>
  ) : (
    ""
  );
}

export default ItemCategoryNews;
