import React, { useEffect } from "react";
import AttributeFilter from "./AttributeFilter/AttributeFilter";
import ItemSelected from "./AttributeFilter/ItemSelected/ItemSelected";
import FooterFilterProduct from "./FooterFilterProduct/FooterFilterProduct";
import * as listProductsAction from "../../../actions/listProduct/index";
import { useDispatch, useSelector } from "react-redux";

function FilterProduct(props) {
  //
  const listProduct = useSelector((state) => state.listProduct);
  const dispatch = useDispatch();
  useEffect(() => {}, [listProduct.filters, listProduct.slug]);
  //
  return (
    <div className="w-full mx-auto">
      {!listProduct.type && <AttributeFilter />}
      <FooterFilterProduct />
      {listProduct.filters.length > 0 && (
        <div className="w-full my-3 flex flex-wrap">
          {listProduct.filters.map((item, index) => {
            return (
              <ItemSelected
                key={index}
                item={item}
                onClick={() => {
                  dispatch(listProductsAction.loadListProduct());
                  dispatch(
                    listProductsAction.removeFilterProductRequest({
                      filters: listProduct.filters,
                      item: {
                        id: item.data.id,
                        data: item.data,
                        name: item.data.name,
                      },
                      typeProduct: listProduct.typeProduct,
                      sorter: listProduct.sorter,
                      slug: listProduct.slug,
                    })
                  );
                }}
              />
            );
          })}
          <div
            onClick={() =>
              dispatch(
                listProductsAction.resetFilterProductRequest(listProduct.slug)
              )
            }
            className={`border-2 border-solid border-organce text-white h-8 px-1 py-0.5 rounded-lg font-semibold text-sm bg-organce cursor-pointer flex items-center`}
          >
            Bỏ hết
            <i className="bx bx-x text-xl ml-1 mt-0.5"></i>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterProduct;
