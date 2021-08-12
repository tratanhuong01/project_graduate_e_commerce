import React from "react";
import CategoryIndexLeft from "../../components/Index/CategoryIndex/CategoryIndexLeft/CategoryIndexLeft";
import CategoryIndexRight from "../../components/Index/CategoryIndex/CategoryIndexRight/CategoryIndexRight";

function CategoryIndex(props) {
  return (
    <div className="w-full md:w-11/12 xl:w-4/5 mx-auto m-4 flex bg-white relative">
      <CategoryIndexLeft />
      <CategoryIndexRight />
    </div>
  );
}

export default CategoryIndex;
