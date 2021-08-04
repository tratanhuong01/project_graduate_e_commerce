import React from "react";
import Customer from "../../../../../components/Admin/Index/IndexRight/Category/Customer/Customer";
import HeaderTop from "../../../../../components/Admin/Index/IndexRight/HeaderTop/HeaderTop";

function IndexRight(props) {
  return (
    <div className="w-4/5 h-screen" id="rightIndex">
      <HeaderTop />
      <Customer />
    </div>
  );
}

export default IndexRight;
