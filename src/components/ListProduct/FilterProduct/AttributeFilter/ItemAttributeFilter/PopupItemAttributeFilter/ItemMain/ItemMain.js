import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as listProductsAction from "../../../../../../../actions/listProduct/index";

function ItemMain(props) {
  //
  const { list, name, setIndex } = props;
  const listProduct = useSelector((state) => state.listProduct);
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full flex flex-wrap">
      {list.map((item, index) => {
        const state = listProduct.filters.findIndex((dt) => dt.id === item.id);
        return (
          <div
            onClick={() => {
              setIndex(-1);
              dispatch(
                listProductsAction.addFilterProductRequest({
                  filters: listProduct.filters,
                  item: {
                    id: item.id,
                    data: item,
                    name: item.nameFunctionProduct,
                  },
                })
              );
            }}
            key={index}
            className={`px-2 py-1 m-2 rounded-full p-1 border-2 border-solid text-sm 
            ${
              state === -1
                ? " border-gray-300 hover:border-organce hover:text-organce "
                : " border-organce text-organce "
            }`}
          >
            {item[name]}
          </div>
        );
      })}
    </div>
  );
}

export default ItemMain;
