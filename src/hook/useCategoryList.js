import { useEffect, useState } from "react";
import api from "../Utils/api";

export default function useCategoryList(props) {
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
  return categorys;
}
