import React, { useEffect, useState } from "react";
import api from "../../../../Utils/api";
import SearchPopup from "../SearchPopup/SearchPopup";

function InputSearch(props) {
  //
  const { data } = props;
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let timeOut;
    if (keyword.length > 0) {
      timeOut = setTimeout(async () => {
        const result = await api(
          `products/search/?keyword=${keyword}&slug=${data.id}`,
          "GET",
          null
        );
        if (result.data.length > 0) setProducts(result.data);
        else setProducts(null);
        setLoading(false);
      }, 500);
    } else {
      setProducts(null);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [keyword]);

  //
  return (
    <div className="md:w-8/12 rounded-full relative">
      <input
        placeholder="Nhập tên sản phẩm..."
        className="w-full p-2.5 text-gray-800 dark:text-gray-300 rounded-full"
        value={keyword}
        onChange={(event) => {
          setLoading(true);
          setProducts([]);
          setKeyword(event.target.value);
        }}
      />
      {products && <SearchPopup loading={loading} products={products} />}
    </div>
  );
}

export default InputSearch;
