import React from "react";

function HeaderLeft(props) {
  //

  return (
    <div className="w-1/3 pl-5 flex text-white">
      <p
        className="flex items-center cursor-pointer"
      >
        <i className="bx bxs-category text-4xl mr-4"></i>
        <span className="text-xl font-semibold hidden md:block">Danh mục</span>
      </p>
    </div>
  );
}

export default HeaderLeft;
