import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../../../Utils/api";
import ItemAttributeFilter from "./ItemAttributeFilter/ItemAttributeFilter";
import Brand from "./ItemAttributeFilter/PopupItemAttributeFilter/Brand/Brand";
import ItemMain from "./ItemAttributeFilter/PopupItemAttributeFilter/ItemMain/ItemMain";
import Price from "./ItemAttributeFilter/PopupItemAttributeFilter/Price/Price";
import * as listProductsAction from "../../../../actions/listProduct/index";
function AttributeFilter(props) {
  //
  const { slug } = props;
  const [filters, setFilters] = useState([]);
  const [index, setIndex] = useState(-1);
  const dispatch = useDispatch();
  useEffect(() => {
    //
    let unmounted = false;
    if (slug) {
      async function fetch() {
        const result = await api(`getFilterByGroupProduct/${slug}`);
        if (unmounted) return;
        dispatch(listProductsAction.resetAllFilterSorterSearchListProduct());
        setFilters(result.data);
      }
      fetch();
    }
    return () => {
      unmounted = false;
    };
    //
  }, [slug]);
  //
  return (
    <div className="w-full flex flex-wrap mb-3 -ml-2">
      <ItemAttributeFilter
        onClick={(index) => setIndex(index)}
        name="Hãng"
        index={0}
        indexCurrent={index}
      >
        <Brand />
      </ItemAttributeFilter>
      <ItemAttributeFilter
        onClick={(index) => setIndex(index)}
        name="Giá"
        index={1}
        indexCurrent={index}
      >
        <Price />
      </ItemAttributeFilter>
      {filters.map((item, pos) => {
        return (
          <ItemAttributeFilter
            key={pos}
            onClick={(index) => setIndex(index)}
            name={item.groupFilterProduct.nameGroupFilterProduct}
            index={pos + 2}
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
