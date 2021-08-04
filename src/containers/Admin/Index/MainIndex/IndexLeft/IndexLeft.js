import React from "react";
import Category from "../../../../../components/Admin/Index/IndexLeft/Category/Category";
import InfoAdmin from "../../../../../components/Admin/Index/IndexLeft/InfoAdmin/InfoAdmin";
import Logo from "../../../../../components/Admin/Index/IndexLeft/Logo/Logo";

function IndexLeft(props) {
  return (
    <div className="w-1/5 shadow-lg h-screen">
      <Logo />
      <InfoAdmin />
      <Category />
    </div>
  );
}

export default IndexLeft;
