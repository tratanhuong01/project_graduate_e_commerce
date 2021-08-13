import React, { useState } from "react";
import ShowMore from "./ShowMore/ShowMore";

function DescribeProduct(props) {
  //
  const { products } = props;
  const [minHeight, setMinHeight] = useState({ maxHeight: 167 });
  //
  return (
    <>
      <p className="font-bold mb-3 text-2xl">Mô tả sản phẩm</p>
      <p className="font-bold mb-3 text-3xl">{products.nameLineProduct}</p>
      <div className="w-full my-6 px-4 overflow-hidden" style={minHeight}>
        <div
          className="w-full my-2 post"
          dangerouslySetInnerHTML={{ __html: products.describeProduct }}
        ></div>
      </div>
      <ShowMore setMinHeight={setMinHeight} minHeight={minHeight} />
    </>
  );
}

export default DescribeProduct;
