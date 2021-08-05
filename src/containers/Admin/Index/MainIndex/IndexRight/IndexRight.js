import React from "react";
import Product from "../../../../../components/Admin/Index/IndexRight/Category/Product/Product";
import HeaderTop from "../../../../../components/Admin/Index/IndexRight/HeaderTop/HeaderTop";

function IndexRight(props) {
  return (
    <div className="w-4/5 h-screen" id="rightIndex">
      <HeaderTop />
      <Product />
    </div>
  );
}

export default IndexRight;
