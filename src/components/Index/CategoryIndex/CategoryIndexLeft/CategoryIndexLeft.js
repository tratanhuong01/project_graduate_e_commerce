import React, { useEffect, useState } from "react";
import api from "../../../../Utils/api";
import ItemCategoryIndexLeft from "./ItemCategoryIndexLeft/ItemCategoryIndexLeft";

function CategoryIndexLeft(props) {
  //
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    //
    const fetch = async () => {
      const categoryResult = await api(
        "getCategoryByGroupProducts",
        "GET",
        null
      );
      setCategorys(categoryResult.data);
    };
    fetch();
    return () => setCategorys([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    categorys.length > 0 && (
      <ul className="w-full relative shadow-lg bg-white text-gray-800">
        {categorys.map((item, index) => {
          return (
            <ItemCategoryIndexLeft
              groups={item}
              key={index}
              icon={item.categoryProduct.icon}
              label={item.categoryProduct.nameCategoryProduct}
            />
          );
        })}
      </ul>
    )
  );
}

export default CategoryIndexLeft;
