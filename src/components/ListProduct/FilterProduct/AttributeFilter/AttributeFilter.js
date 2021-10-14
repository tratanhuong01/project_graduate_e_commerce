import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../Utils/api";
import ItemAttributeFilter from "./ItemAttributeFilter/ItemAttributeFilter";
import Brand from "./ItemAttributeFilter/PopupItemAttributeFilter/Brand/Brand";
import ItemMain from "./ItemAttributeFilter/PopupItemAttributeFilter/ItemMain/ItemMain";
import Price from "./ItemAttributeFilter/PopupItemAttributeFilter/Price/Price";
import * as listProductsAction from "../../../../actions/listProduct/index";
import ColorRamRom from "./ColorRamRom/ColorRamRom";
import Color from "../AttributeFilter/ItemAttributeFilter/PopupItemAttributeFilter/Color/Color";
function AttributeFilter(props) {
  //
  const { listProduct, headers } = useSelector((state) => {
    return {
      listProduct: state.listProduct,
      headers: state.headers,
    };
  });
  const { slug } = listProduct;
  const [filters, setFilters] = useState([]);
  const [index, setIndex] = useState(-1);
  const dispatch = useDispatch();
  useEffect(() => {
    //
    let unmounted = false;
    if (slug) {
      async function fetch() {
        try {
          dispatch(listProductsAction.resetAllFilterSorterSearchListProduct());
          const result = await api(
            `getFilterByGroupProduct/${slug}`,
            "GET",
            null,
            headers
          );
          if (unmounted) return;
          setFilters(result.data);
        } catch (error) {
          throw error;
        }
      }
      fetch();
    }
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);
  //
  return (
    <div className="w-full flex flex-wrap mb-3 -ml-2 z-0 ">
      {listProduct.products && (
        <>
          <ItemAttributeFilter
            onClick={(index) => setIndex(index)}
            name="Hãng"
            index={0}
            indexCurrent={index}
            slug={slug}
          >
            <Brand setIndex={setIndex} slug={slug} />
          </ItemAttributeFilter>
          <ItemAttributeFilter
            onClick={(index) => setIndex(index)}
            name="Giá"
            index={1}
            indexCurrent={index}
          >
            <Price setIndex={setIndex} />
          </ItemAttributeFilter>
          <ItemAttributeFilter
            onClick={(index) => setIndex(index)}
            name="Màu sắc"
            index={4}
            indexCurrent={index}
            slug={slug}
          >
            <Color setIndex={setIndex} slug={slug} />
          </ItemAttributeFilter>
        </>
      )}
      <ColorRamRom
        slug={slug}
        listProduct={listProduct}
        setIndex={setIndex}
        index={index}
      />
      {filters.map((item, pos) => {
        return (
          <ItemAttributeFilter
            key={pos}
            onClick={(index) => setIndex(index)}
            name={item.groupFilterProduct.nameGroupFilterProduct}
            index={pos + 5}
            indexCurrent={index}
          >
            <ItemMain
              setIndex={setIndex}
              list={item.functionProductList}
              name="nameFunctionProduct"
            />
          </ItemAttributeFilter>
        );
      })}
    </div>
  );
}

export default AttributeFilter;
