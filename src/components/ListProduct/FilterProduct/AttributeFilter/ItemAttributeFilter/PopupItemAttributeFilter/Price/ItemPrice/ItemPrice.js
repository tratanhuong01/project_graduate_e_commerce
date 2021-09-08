import React from "react";
import { useDispatch } from "react-redux";
import * as listProductsAction from "../../../../../../../../actions/listProduct/index";
function ItemPrice(props) {
  //
  const { price, setIndex, listProduct } = props;
  const dispatch = useDispatch();
  //
  return (
    <div
      onClick={() => {
        setIndex(-1);
        dispatch(listProductsAction.loadListProduct(null));
        dispatch(
          listProductsAction.addFilterProductRequest({
            filters: listProduct.filters,
            item: {
              id: price.id,
              data: price,
              name: price.name,
              query: `priceFrom=${price.from}&priceTo=${price.to}`,
              type: 0,
            },
            slug: listProduct.slug,
          })
        );
      }}
      className="px-2 m-2 rounded-full p-1 border-2 border-solid border-gray-300 hover:border-organce 
    text-sm"
    >
      {price.name}
    </div>
  );
}

export default ItemPrice;
