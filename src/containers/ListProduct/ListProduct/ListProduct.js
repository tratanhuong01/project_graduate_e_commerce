import React from "react";
import ItemProduct from "../../../components/General/ItemProduct/ItemProduct";
import LoadingListProduct from "./LoadingListProduct/LoadingListProduct";
import no__result from "../../../assets/images/no__result.gif";
import Pagination from "../../../components/General/Pagination/Pagination";
import * as listProductsAction from "../../../actions/listProduct/index";
import { useDispatch, useSelector } from "react-redux";
function ListProduct(props) {
  //
  const { listProduct, headers } = useSelector((state) => {
    return {
      listProduct: state.listProduct,
      headers: state.headers,
    };
  });
  const dispatch = useDispatch();
  //
  return !listProduct.loading ? (
    listProduct.products ? listProduct.products.length > 0 ? (
      <div className="w-full mx-auto ">
        <div className="w-full flex flex-wrap my-4 z-10">
          {listProduct.products.map((product, index) => {
            return <ItemProduct product={product} key={index} />;
          })}
        </div>
        <div className="w-full flex justify-center my-2">
          <Pagination
            index={listProduct.index}
            length={listProduct.length}
            limit={12}
            dispatch={(item) =>
              dispatch(
                listProductsAction.filterProductPaginationIndexRequest(
                  {
                    filters: listProduct.filters,
                    sorter: listProduct.sorter,
                    typeProduct: listProduct.typeProduct,
                    index: item,
                    slug: listProduct.slug,
                  },
                  headers
                )
              )
            }
          />
        </div>
      </div>
    ) :
      <div className="w-full flex flex-col my-5 items-center h-80 justify-center">
        <img src={no__result} alt="" className="w-80 object-cover" />
        <p className="text-center mt-3 text-gray-600 font-semibold">
          Không tìm thấy sản phẩm cho bộ lọc
        </p>
      </div>
      : (
        <LoadingListProduct />
      )
  ) : (
    <LoadingListProduct />
  );
}

export default ListProduct;
