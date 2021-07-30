import React from "react";

function HeaderLeftNormal(props) {
  //

  return (
    <div className="w-1/3 pl-5 flex">
      <p
        className="flex items-center cursor-pointer"
      >
        <i className="bx bxs-category text-4xl mr-4"></i>
        <span className="text-xl font-semibold hidden md:block">Danh mục</span>
      </p>
    </div>
  );
}

export default HeaderLeftNormal;
