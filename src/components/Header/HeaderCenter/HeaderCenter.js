import React, { useState } from "react";
import CategorySearch from "./CategorySearch/CategorySearch";
import InputSearch from "./InputSearch/InputSearch";

function HeaderCenter(props) {
  //
  const { categorys } = props;
  const [data, setData] = useState({
    name: "Tất cả danh mục",
    id: "",
  });
  //
  return (
    <div className="hidden md:flex md:w-8/12 lg:w-3/5 items-center justify-end ">
      <div
        className="md:w-full md:mx-4 lg:mx-0 lg:w-10/12 flex item-center border-2 border-solid relative  
        border-organce rounded-full"
      >
        <InputSearch data={data} />
        <CategorySearch data={data} setData={setData} categorys={categorys} />
        <div className="w-1/12 flex items-center justify-center cursor-pointer">
          <span className="bx bx-search text-2xl text-organce px-2"></span>
        </div>
      </div>
    </div>
  );
}

export default HeaderCenter;
