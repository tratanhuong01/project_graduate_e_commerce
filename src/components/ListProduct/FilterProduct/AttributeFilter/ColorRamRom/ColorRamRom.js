import React, { useEffect } from "react";
import ItemAttributeFilter from "../ItemAttributeFilter/ItemAttributeFilter";
import Ram from "../ItemAttributeFilter/PopupItemAttributeFilter/Ram/Ram";
import Rom from "../ItemAttributeFilter/PopupItemAttributeFilter/Rom/Rom";
import Color from "../ItemAttributeFilter/PopupItemAttributeFilter/Color/Color";

function ColorRamRom(props) {
  //
  const { setIndex, index, slug } = props;
  useEffect(() => {}, [slug]);
  //
  return slug === "dien-thoai" ||
    slug === "may-tinh" ||
    slug === "may-tinh-bang" ? (
    <>
      <ItemAttributeFilter
        onClick={(index) => setIndex(index)}
        name="Bộ nhớ ngoài"
        index={2}
        indexCurrent={index}
        slug={slug}
      >
        <Ram setIndex={setIndex} slug={slug} />
      </ItemAttributeFilter>
      <ItemAttributeFilter
        onClick={(index) => setIndex(index)}
        name="Bộ nhớ trong"
        index={3}
        indexCurrent={index}
        slug={slug}
      >
        <Rom setIndex={setIndex} slug={slug} />
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
  ) : (
    ""
  );
}

export default ColorRamRom;
