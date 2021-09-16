import React, { useEffect, useState } from "react";
import ItemProduct from "../../components/General/ItemProduct/ItemProduct";
import NotifyNumberProductSearch from "../../components/Search/NotifyNumberProductSearch";
import api from "../../Utils/api";
import LoadingListProduct from "../ListProduct/ListProduct/LoadingListProduct/LoadingListProduct";
import no__result from "../../assets/images/no__result.gif";
import { useLocation } from "react-router";
import Pagination from "../../components/General/Pagination/Pagination";
function MainSearch(props) {
  //
  const { keyword, slug } = props;
  const [length, setLength] = useState(0);
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState(null);
  const location = useLocation();
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const list = await api(
        `products/search/?keyword=${keyword}&slug=${
          slug === "tat-ca" ? "" : slug
        }&type=1&limit=${0}&offset=${0}`,
        "GET",
        null
      );
      const listCurrent = await api(
        `products/search/?keyword=${keyword}&slug=${
          slug === "tat-ca" ? "" : slug
        }&type=0&limit=${12}&offset=${index * 12}`,
        "GET",
        null
      );
      if (unmounted) return;
      setLength(list.data.length);
      setProducts(listCurrent.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, index]);
  useEffect(() => {}, [location.pathname, products, keyword]);
  //
  return (
    <div className="w-full ">
      <div className="xl:w-4/5 w-full mx-auto p-4">
        {products ? (
          products.length <= 0 ? (
            <div className="w-full flex flex-col my-5 items-center h-80 justify-center">
              <img src={no__result} alt="" className="w-80 object-cover" />
              <p className="text-center mt-3 text-gray-600 font-semibold">
                Không tìm thấy sản phẩm cho từ khóa " {keyword} "
              </p>
            </div>
          ) : (
            <>
              <NotifyNumberProductSearch products={products} />
              <div className="w-full flex flex-wrap">
                {products.map((product, index) => (
                  <ItemProduct product={product} key={index} />
                ))}
              </div>
              <div className="flex justify-center items-center">
                <Pagination
                  index={index}
                  length={length}
                  dispatch={(index) => setIndex(index)}
                  limit={12}
                />
              </div>
            </>
          )
        ) : (
          <LoadingListProduct />
        )}
      </div>
    </div>
  );
}

export default MainSearch;
