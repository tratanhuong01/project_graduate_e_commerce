import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as listProductsAction from "../../../../../../../../actions/listProduct/index";
function ItemColor(props) {
  //
  const { color, state, setIndex, listProduct } = props;
  const headers = useSelector((state) => state.headers);
  const dispatch = useDispatch();
  //
  return (
    <div
      onClick={() => {
        setIndex(-1);
        dispatch(listProductsAction.loadingListProduct(true));
        const timeOut = setTimeout(() => {
          dispatch(
            listProductsAction.addFilterProductRequest(
              {
                filters: listProduct.filters,
                item: {
                  id: color.id,
                  data: color,
                  name: color.description,
                  query: "color",
                },
                typeProduct: listProduct.typeProduct,
                sorter: listProduct.sorter,
                slug: listProduct.slug,
                index: listProduct.index,
              },
              headers
            )
          );
        }, 500);
        return () => {
          clearTimeout(timeOut);
        };
      }}
      className={`w-11 h-11 m-2 rounded-full border-2 border-solid text-sm 
      ${state === -1
          ? " border-gray-300 hover:border-organce hover:text-organce "
          : " border-organce text-organce "
        }`}
      style={{ backgroundColor: color.code }}
    ></div>
  );
}

export default ItemColor;
