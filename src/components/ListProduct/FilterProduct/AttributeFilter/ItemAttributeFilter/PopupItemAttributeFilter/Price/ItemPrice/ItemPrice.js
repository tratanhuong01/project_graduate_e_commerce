import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as listProductsAction from "../../../../../../../../actions/listProduct/index";
function ItemPrice(props) {
  //
  const { price, setIndex } = props;
  const { listProduct, headers } = useSelector((state) => {
    return {
      listProduct: state.listProduct,
      headers: state.headers,
    };
  });
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
                  id: price.id,
                  data: price,
                  name: price.name,
                  query: `priceFrom=${price.from}&priceTo=${price.to}`,
                  type: 0,
                },
                sorter: listProduct.sorter,
                typeProduct: listProduct.typeProduct,
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
      className="px-2 m-2 rounded-full p-1 border-2 border-solid border-gray-300 hover:border-organce 
    text-sm"
    >
      {price.name}
    </div>
  );
}

export default ItemPrice;
