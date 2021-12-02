import React, { useEffect, useState } from "react";
import api from "../../../Utils/api";
import ItemHorizontalCategory from "./ItemHorizontalCategory/ItemHorizontalCategory";

function HorizontalCategory(props) {
  //
  const [categories, setCategories] = useState(null);
  const { className, link } = props;
  useEffect(() => {
    //
    let unmounted = false;
    const fetch = async () => {
      const result = await api(`getCategoryByGroupProduct`, 'GET', null, {});
      if (unmounted) return;
      setCategories(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    }
    //
  }, [])
  //
  return (
    <div className={className}>
      {categories ? categories.map((item, index) => {
        return (
          <ItemHorizontalCategory
            link={link}
            item={item}
            key={index}
            categorys={categories}
          />
        );
      }) : ""}
    </div>
  );
}

export default HorizontalCategory;
