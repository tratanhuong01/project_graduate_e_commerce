import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as listProductsAction from "../../../../../../../../actions/listProduct/index";
function ItemBrand(props) {
  //
  const { brand, state, setIndex } = props;
  const dispatch = useDispatch();
  const { headers, listProduct } = useSelector((state) => {
    return {
      listProduct: state.listProduct,
      headers: state.headers,
    };
  });
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
                  id: brand.id,
                  data: brand,
                  name: brand.nameBrand,
                  query: "brand",
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
      className={`w-21% border-2 border-solid  px-1 py-2 rounded-full 
      m-2 ${
        state === -1 ? "hover:border-organce border-gray-300" : "border-organce"
      }`}
    >
      <img src={brand.imageBrand} alt="" className="w-full h-5 object-cover" />
    </div>
  );
}

export default ItemBrand;
