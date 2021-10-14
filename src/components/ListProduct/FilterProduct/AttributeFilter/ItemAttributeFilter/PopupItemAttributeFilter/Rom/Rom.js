import React, { useEffect, useState } from "react";
import ItemRom from "./ItemRom/ItemRom";
import api from "../../../../../../../Utils/api";
import { useSelector } from "react-redux";
function Rom(props) {
  //

  const { setIndex } = props;
  const [memories, setMemories] = useState([]);
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
          listProduct.slug ? `memoriesAll` : `memoriesAll`,
          "GET",
          null,
          headers
        );
        if (unmounted) return;
        setMemories(result.data);
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
      {memories.length > 0 ? (
        memories.map((memory, index) => {
          const state = listProduct.filters.findIndex(
            (dt) => dt.id === memory.id
          );
          return (
            <ItemRom
              memory={memory}
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

export default Rom;
