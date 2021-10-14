import React, { useEffect, useState } from "react";
import ItemRam from "./ItemRam/ItemRam";
import api from "../../../../../../../Utils/api";
import { useSelector } from "react-redux";
function Ram(props) {
  //
  const { setIndex } = props;
  const [rams, setRams] = useState([]);
  const { headers, listProduct } = useSelector((state) => {
    return {
      listProduct: state.listProduct,
      headers: state.headers,
    };
  });
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      try {
        const result = await api(
          listProduct.slug ? `ramsAll` : `ramsAll`,
          "GET",
          null,
          headers
        );
        if (unmounted) return;
        setRams(result.data);
      } catch (error) {
        throw error;
      }
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listProduct.slug]);
  //
  return (
    <div className="w-full flex flex-wrap">
      {rams.length > 0 ? (
        rams.map((ram, index) => {
          const state = listProduct.filters.findIndex((dt) => dt.id === ram.id);
          return (
            <ItemRam
              ram={ram}
              key={index}
              state={state}
              setIndex={setIndex}
              listProduct={listProduct}
            />
          );
        })
      ) : (
        <div className="p-2.5 font-semibold text-gray-600">Đang cập nhật</div>
      )}
    </div>
  );
}

export default Ram;
