import React from "react";
import * as addressApi from "../../../../../../../api/addressApi";

function ItemAddressRender(props) {
  //
  const {
    listCurrent,
    setSearch,
    setProvince,
    setWards,
    setShow,
    setCurrent,
    setDistrict,
    setFullAddress,
    setItem,
    setList,
    setListCurrent,
    current,
  } = props;
  const dataGet = (current, item) => {
    if (current === 0)
      return { name: "province", data: null, key: "ProvinceName" };
    if (current === 1)
      return {
        name: "district",
        data: { province_id: item.ProvinceID },
        key: "DistrictName",
      };
    if (current === 2)
      return {
        name: "ward",
        data: { district_id: item.DistrictID },
        key: "WardName",
      };
  };
  //
  return (
    <div
      className="w-full text-gray-800 h-56 max-h-56 overflow-y-auto my-1 
        scrollbar-css  dark:border-dark-third dark:text-white"
    >
      {listCurrent.map((item, index) => {
        return (
          <div
            onClick={async () => {
              let unmounted = false;
              if (current === 0) setProvince(JSON.stringify(item));
              if (current === 1) setDistrict(JSON.stringify(item));
              if (current === 2) setWards(JSON.stringify(item));
              setSearch("");
              setItem(item);
              setCurrent(current + 1 > 2 ? 2 : current + 1);
              const { name, data } = dataGet(
                current + 1 > 2 ? 2 : current + 1,
                item
              );
              const result = await addressApi.getAddress({
                name: name,
                data: data,
              });
              if (unmounted) return;
              setListCurrent(result.data.data);
              setList(result.data.data);
              if (current + 1 > 2) {
                setShow();
                setFullAddress();
              }
              return () => {
                unmounted = true;
              };
            }}
            key={index}
            className="w-full p-2 flex items-center hover:bg-gray-100 cursor-pointer"
          >
            {`${current === 0 ? "Tỉnh " : ""}` +
              item[dataGet(current, item).key]}
          </div>
        );
      })}
    </div>
  );
}

export default ItemAddressRender;
