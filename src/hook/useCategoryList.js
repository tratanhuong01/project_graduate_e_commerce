import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../Utils/api";

export default function useCategoryList(props) {
  //
  const [categorys, setCategorys] = useState([]);
  const headers = useSelector((state) => state.headers);
  useEffect(() => {
    //
    const fetch = async () => {
      const categoryResult = await api(
        "getCategoryByGroupProducts",
        "GET",
        null,
        headers
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
