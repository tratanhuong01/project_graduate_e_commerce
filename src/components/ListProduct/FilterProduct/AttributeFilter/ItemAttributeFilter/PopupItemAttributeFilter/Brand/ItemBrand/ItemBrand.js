import React from "react";
import { useDispatch } from "react-redux";
import * as listProductsAction from "../../../../../../../../actions/listProduct/index";
function ItemBrand(props) {
  //
  const { brand, state, setIndex, listProduct } = props;
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
              id: brand.id,
              data: brand,
              name: brand.nameBrand,
              query: "brand",
            },
            slug: listProduct.slug,
          })
        );
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
