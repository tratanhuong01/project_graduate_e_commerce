import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../Utils/api";
import ItemCategoryNews from "../ItemCategoryNews/ItemCategoryNews";

function NewsByCategory(props) {
  //
  const [categories, setCategories] = useState([]);
  const headers = useSelector((state) => state.headers);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      try {
        const result = await api(`categoryNews`, "GET", null, headers);
        if (unmounted) return;
        setCategories(result.data);
      } catch (error) {
        throw error;
      }
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="xl:w-4/5 w-full mx-auto p-4 flex flex-col lg:flex-row">
      {categories.map((category, index) => {
        return <ItemCategoryNews category={category} key={index} />;
      })}
    </div>
  );
}

export default NewsByCategory;
