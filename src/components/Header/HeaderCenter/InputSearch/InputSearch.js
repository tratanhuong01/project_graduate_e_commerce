import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { PAGE_SEARCH } from "../../../../constants/Config";
import api from "../../../../Utils/api";
import SearchPopup from "../SearchPopup/SearchPopup";

function InputSearch(props) {
  //
  const { data, keyword, setKeyword } = props;
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const headers = useSelector((state) => state.headers);
  useEffect(() => {
    //
    let timeOut;
    if (keyword.length > 0) {
      timeOut = setTimeout(async () => {
        try {
          const result = await api(
            `products/search/?keyword=${keyword}&slug=${data.id}&type=1&limit=5&offset=0`,
            "GET",
            null,
            headers
          );
          if (result.data.length > 0) setProducts(result.data);
          else setProducts(null);
          setLoading(false);
        } catch (error) {
          throw error;
        }
      }, 300);
    } else {
      setProducts(null);
    }
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    setProducts(null);
    setKeyword("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  //
  return (
    <div id="search__popup__main" className="md:w-8/12 rounded-full relative">
      <input
        placeholder="Nhập tên sản phẩm..."
        className="w-full p-2.5 text-gray-800 dark:text-gray-300 dark:bg-dark-second rounded-full"
        value={keyword}
        onKeyUp={(event) => {
          if (event.keyCode === 13) {
            setKeyword("");
            setProducts(null);
            history.push(`${PAGE_SEARCH}?query=${keyword}&slug=${data.slug}`);
          }
        }}
        onChange={(event) => {
          setLoading(true);
          setProducts([]);
          setKeyword(event.target.value);
        }}
      />
      {products && (
        <SearchPopup
          loading={loading}
          products={products}
          keyword={keyword}
          data={data}
        />
      )}
    </div>
  );
}

export default InputSearch;
