import axios from "axios";
import React from "react";

function ItemAddressRender(props) {
  //
  const {
    dataRender,
    setSearch,
    setProvince,
    setType,
    setWards,
    setShow,
    setCurrent,
    setDistrict,
    type,
    setList,
    setListCurrent,
    current,
  } = props;
  //
  return (
    <div
      className="w-full text-gray-800 h-56 max-h-56 overflow-y-auto my-1 
        scrollbar-css"
    >
      {dataRender.map((item, index) => {
        return (
          <div
            onClick={() => {
              setSearch("");
              if (current === 0) {
                setProvince(item);
                setType("d");
              } else if (current === 1) {
                setDistrict(item);
                setType("w");
              } else {
                setWards(item);
                setCurrent(0);
                setType("p");
                setShow();
              }
              setCurrent(current + 1);
              let unmounted = false;
              async function fetch() {
                const result = await axios.get(
                  `https://provinces.open-api.vn/api/${
                    type === "p" ? "p" : "d"
                  }/${item.code}?depth=2`
                );
                if (unmounted) return;
                setList(result.data);
                setListCurrent(result.data);
              }
              fetch();
              return () => (unmounted = true);
            }}
            key={index}
            className="w-full p-2 flex items-center hover:bg-gray-100 cursor-pointer"
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

export default ItemAddressRender;
