import React, { useEffect, useState } from "react";
import api from "../../../../Utils/api";
import ItemAttributeFilter from "./ItemAttributeFilter/ItemAttributeFilter";
import Brand from "./ItemAttributeFilter/PopupItemAttributeFilter/Brand/Brand";
import ItemMain from "./ItemAttributeFilter/PopupItemAttributeFilter/ItemMain/ItemMain";
import Price from "./ItemAttributeFilter/PopupItemAttributeFilter/Price/Price";

function AttributeFilter(props) {
  //
  const { slug } = props;
  const [filters, setFilters] = useState([]);
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(`getFilterByGroupProduct/${slug}`);
      if (unmounted) return;
      setFilters(result.data);
    }
    fetch();
    return () => {
      unmounted = false;
    };
    //
  }, [slug]);
  //
  return (
    <div className="w-full flex flex-wrap mb-5 -ml-2">
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
            onClick={(index) => setIndex(index)}
            name={item.groupFilterProduct.nameGroupFilterProduct}
            index={pos + 2}
            indexCurrent={index}
          >
            <ItemMain
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
