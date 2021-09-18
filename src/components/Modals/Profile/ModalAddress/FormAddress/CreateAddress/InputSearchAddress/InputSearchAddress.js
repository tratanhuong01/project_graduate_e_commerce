import React, { useEffect, useState } from "react";
import * as addressApi from "../../../../../../../api/addressApi";

function InputSearchAddress(props) {
  //
  const { item, current, list, setListCurrent, search, setSearch } = props;
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
  const [dataMain, setDataMain] = useState(dataGet(current, item));
  useEffect(() => {
    //
    setDataMain(dataGet(current, item));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);
  const { name, data, key } = dataMain;
  //
  return (
    <input
      type="text"
      placeholder={`Nhập tên ${
        current === 0
          ? "tỉnh/thành phố"
          : current === 1
          ? "quận/huyện"
          : "phường/xã"
      }  `}
      onChange={async (event) => {
        setSearch(event.target.value);
        if (event.target.value.length === 0) {
          const result = await addressApi.getAddress({
            name: name,
            data: data,
          });
          setListCurrent(result.data.data);
        } else {
          let arrNew = [];
          if (list.length > 0) {
            list.forEach((element) => {
              if (
                element[key]
                  .toLowerCase()
                  .indexOf(event.target.value.toLowerCase()) !== -1
              )
                arrNew.push(element);
            });
            setListCurrent(arrNew);
          }
        }
      }}
      value={search}
      className="w-full rounded-lg text-gray-800 border-2 border-solid border-gray-300 
        mt-3 p-2 dark:text-white dark:border-dark-third dark:bg-dark-third"
    />
  );
}

export default InputSearchAddress;
