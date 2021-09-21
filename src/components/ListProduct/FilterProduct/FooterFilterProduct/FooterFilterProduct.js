import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as listProductsAction from "../../../../actions/listProduct/index";

function FooterFilterProduct(props) {
  //
  const listProduct = useSelector((state) => state.listProduct);
  const dispatch = useDispatch();
  const check = (item) => {
    const index = listProduct.typeProduct.findIndex((dt) => dt === item);
    return index !== -1 ? true : false;
  };
  //
  return (
    <div className="w-full flex">
      <div className="w-2/3 flex items-center">
        <ul className="w-full flex">
          <li className="pr-3 font-semibold mr-3">
            {listProduct.products ? listProduct.products.length : "..."}{" "}
            {listProduct.name ? listProduct.name : "sản phẩm"}
          </li>
          <li className="pr-3 mr-3 flex items-center">
            <input
              onChange={(event) => {
                dispatch(listProductsAction.loadingListProduct());
                const timeOut = setTimeout(() => {
                  dispatch(
                    listProductsAction.loadListProductByTypeProductRequest({
                      filters: listProduct.filters,
                      type: event.target.checked ? 0 : 1,
                      slug: listProduct.slug,
                      typeProduct: listProduct.typeProduct,
                      item: 0,
                    })
                  );
                }, 500);
                return () => {
                  clearTimeout(timeOut);
                };
              }}
              type="checkbox"
              className="transform scale-150 mr-2"
              checked={check(0)}
            />
            <span>Mới</span>
          </li>
          <li className="pr-3 mr-3 flex items-center">
            <input
              onChange={(event) => {
                dispatch(listProductsAction.loadingListProduct());
                const timeOut = setTimeout(() => {
                  dispatch(
                    listProductsAction.loadListProductByTypeProductRequest({
                      filters: listProduct.filters,
                      type: event.target.checked ? 0 : 1,
                      slug: listProduct.slug,
                      typeProduct: listProduct.typeProduct,
                      item: 1,
                    })
                  );
                }, 500);
                return () => {
                  clearTimeout(timeOut);
                };
              }}
              type="checkbox"
              className="transform scale-150 mr-2"
              checked={check(1)}
            />
            <span>Cũ</span>
          </li>
        </ul>
      </div>
      <div className="w-1/3 flex justify-end items-center">
        <select
          onChange={(event) => {
            dispatch(listProductsAction.loadingListProduct());
            const timeOut = setTimeout(() => {
              dispatch(
                listProductsAction.loadListProductSorterRequest({
                  filters: listProduct.filters,
                  sorter: event.target.value,
                  slug: listProduct.slug,
                  typeProduct: listProduct.typeProduct,
                })
              );
            }, 500);
            return () => {
              clearTimeout(timeOut);
            };
          }}
          className="py-1 pr-4 pl-1 rounded-sm border-2 border-solid border-gray-300"
        >
          <option value="0">Tất cả</option>
          <option value="0">Mới nhất</option>
          <option value="1">Bán chạy</option>
          <option value="2">Khuyến mãi</option>
          <option value="4">Giá từ thấp đến cao</option>
          <option value="3">Giá từ cao đến thấp</option>
          <option value="5">Theo lượt đánh giá</option>
        </select>
      </div>
    </div>
  );
}

export default FooterFilterProduct;
