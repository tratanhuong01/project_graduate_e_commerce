import React from "react";
import Customer from "../../../../../components/Admin/Index/IndexRight/General/Customer/Customer";
import HeaderTop from "../../../../../components/Admin/Index/IndexRight/HeaderTop/HeaderTop";

function IndexRight(props) {
  return (
    <div class="w-4/5 h-screen" id="rightIndex">
      <HeaderTop />
      <Customer />
    </div>
  );
}

export default IndexRight;
