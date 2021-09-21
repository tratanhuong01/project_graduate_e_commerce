import React, { useEffect } from "react";
import useCategoryList from "../../../hook/useCategoryList";
import HorizontalCategory from "../../Index/HorizontalCategory/HorizontalCategory";

function CategoryProduct(props) {
  //
  const categorys = useCategoryList();
  useEffect(() => {}, []);
  //
  return (
    <div className="w-full mb-4 flex ">
      <HorizontalCategory
        categorys={categorys}
        className="w-full mx-auto flex justify-center"
        link={true}
      />
    </div>
  );
}

export default CategoryProduct;
