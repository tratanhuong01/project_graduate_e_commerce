import React, { useState } from "react";
import ItemAttributeFilter from "./ItemAttributeFilter/ItemAttributeFilter";
import Brand from "./ItemAttributeFilter/PopupItemAttributeFilter/Brand/Brand";
import Price from "./ItemAttributeFilter/PopupItemAttributeFilter/Price/Price";

function AttributeFilter(props) {
  //
  const [index, setIndex] = useState(-1);
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
    </div>
  );
}

export default AttributeFilter;
