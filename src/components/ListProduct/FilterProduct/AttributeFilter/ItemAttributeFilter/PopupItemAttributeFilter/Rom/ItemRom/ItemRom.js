import React from "react";
import { useDispatch } from "react-redux";
import * as listProductsAction from "../../../../../../../../actions/listProduct/index";
function ItemRom(props) {
  //
  const { memory, state, setIndex, listProduct } = props;
  const dispatch = useDispatch();
  //
  return (
    <div
      onClick={() => {
        setIndex(-1);
        dispatch(listProductsAction.loadingListProduct(true));
        const timeOut = setTimeout(() => {
          dispatch(
            listProductsAction.addFilterProductRequest({
              filters: listProduct.filters,
              item: {
                id: memory.id,
                data: memory,
                name: memory.nameMemory,
                query: "rom",
              },
              typeProduct: listProduct.typeProduct,
              sorter: listProduct.sorter,
              slug: listProduct.slug,
            })
          );
        }, 500);
        return () => {
          clearTimeout(timeOut);
        };
      }}
      className={`px-2 py-1 m-2 rounded-full p-1 border-2 border-solid text-sm 
      ${
        state === -1
          ? " border-gray-300 hover:border-organce hover:text-organce "
          : " border-organce text-organce "
      }`}
    >
      {memory.nameMemory}
    </div>
  );
}

export default ItemRom;
