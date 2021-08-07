import React from "react";
import Customer from "../../../../../components/Admin/Index/IndexRight/Category/Customer/Customer";
import HeaderTop from "../../../../../components/Admin/Index/IndexRight/HeaderTop/HeaderTop";

function IndexRight(props) {
  return (
    <div className="h-screen index__right">
      <HeaderTop />
      <Customer />
    </div>
  );
}

export default IndexRight;
