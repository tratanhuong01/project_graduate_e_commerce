import React from "react";
import Category from "../../../../../components/Admin/Index/IndexLeft/Category/Category";
import InfoAdmin from "../../../../../components/Admin/Index/IndexLeft/InfoAdmin/InfoAdmin";
import Logo from "../../../../../components/Admin/Index/IndexLeft/Logo/Logo";

function IndexLeft(props) {
  return (
    <div className="w-32 lg:w-60 xl:w-1/5 shadow-lg h-screen h-full max-h-full overflow-y-auto  scrollbar-css">
      <Logo />
      <InfoAdmin />
      <Category />
    </div>
  );
}

export default IndexLeft;
