import axios from "axios";
import React from "react";

function InputSearchAddress(props) {
  //
  const { type, current, dataSearch, setListCurrent, search, setSearch } =
    props;
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
        if (current === 0) {
          const result = await axios.get(
            `https://provinces.open-api.vn/api/${type}/search/?q=${event.target.value}`
          );
          setListCurrent(result.data);
        } else {
          let arrNew = [];
          if (dataSearch.length > 0) {
            dataSearch.forEach((element) => {
              if (
                element.name
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
