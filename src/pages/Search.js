import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ItemProduct from "../components/General/ItemProduct/ItemProduct";
import Pagination from "../components/General/Pagination/Pagination";
import LoadingListProduct from "../containers/ListProduct/ListProduct/LoadingListProduct/LoadingListProduct";
import useResetPage from "../hook/useResetPage";
import api from "../Utils/api";
import no__result from "../assets/images/no__result.gif";

function Search(props) {
  //
  const params = new URLSearchParams(window.location.search);
  useResetPage("Tìm kiếm");
  const [length, setLength] = useState(0);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([]);
  const location = useLocation();
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const slug = params.get("slug") === "tat-ca" ? "" : params.get("slug");
      const query = params.get("query");
      try {
        const list = await api(
          `products/search/page/all/?keyword=${query}&slug=${slug}`,
          "GET",
          null
        );
        const listCurrent = await api(
          `products/search/page/limit/?keyword=${query}&slug=${slug}&limit=${12}&offset=${index * 12
          }`,
          "GET",
          null
        );
        if (unmounted) return;
        setLoading(false);
        setLength(list.data);
        setProducts(listCurrent.data);
      } catch (error) {
        throw error;
      }
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, index]);
  //
  return (
    <div className="w-full ">
      <div className="xl:w-4/5 w-full mx-auto p-4">
        {!loading ? (
          products.length <= 0 ? (
            <div className="w-full flex flex-col my-5 items-center h-80 justify-center">
              <img src={no__result} alt="" className="w-80 object-cover" />
              <p className="text-center mt-3 text-gray-600 font-semibold dark:text-gray-300">
                Không tìm thấy sản phẩm cho từ khóa " {params.get("query")} "
              </p>
            </div>
          ) : (
            <>
              <p className="font-semibold text-2xl p-2 py-5 dark:text-gray-300 mt-3 mb-6">
                {`CÓ ${length} KẾT QUẢ TÌM KIẾM PHÙ HỢP`}
              </p>
              <div className="w-full flex flex-wrap">
                {products.map((product, index) => (
                  <ItemProduct product={product} key={index} />
                ))}
              </div>
              <div className="flex justify-center items-center">
                <Pagination
                  index={index}
                  length={length}
                  dispatch={(index) => {
                    setIndex(index);
                    window.scrollTo(0, 160);
                  }}
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

export default Search;
