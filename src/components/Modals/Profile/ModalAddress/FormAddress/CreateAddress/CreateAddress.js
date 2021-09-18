import React, { useEffect, useState } from "react";
import InputSearchAddress from "./InputSearchAddress/InputSearchAddress";
import ItemAddressRender from "./ItemAddressRender/ItemAddressRender";
import * as addressApi from "../../../../../../api/addressApi";

function CreateAddress(props) {
  //
  const [list, setList] = useState([]);
  const [listCurrent, setListCurrent] = useState([]);
  const [current, setCurrent] = useState(0);
  const { setProvince, setDistrict, setWards, setShow, setFullAddress } = props;
  const data = ["Tỉnh/Thành phố", "Quận/Huyện", "Phường/Xã"];
  const [item, setItem] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await addressApi.getAddress({
        data: null,
        name: "province",
      });
      if (unmounted) return;
      setList(result.data.data);
      setListCurrent(result.data.data);
    }
    fetch();
    return () => (unmounted = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="w-full px-2 my-1 bg-white absolute top-full left-0 z-20 dark:bg-dark-second">
      <div
        className="p-1 border-2 border-solid border-gray-300 dark:bg-dark-second 
        text-gray-400 shadow-sm dark:border-dark-third dark:text-white"
      >
        <ul className="w-full flex">
          {data.map((item, index) => {
            return (
              <li
                key={index}
                className={`w-1/3 text-center py-2 border-b-2 border-solid  
                  ${
                    current === index
                      ? "text-organce border-organce"
                      : "border-white text-gray-600"
                  } cursor-pointer font-semibold`}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <InputSearchAddress
          current={current}
          list={list}
          setListCurrent={setListCurrent}
          search={search}
          setSearch={setSearch}
          item={item}
          setItem={setItem}
        />
        <ItemAddressRender
          listCurrent={listCurrent}
          setFullAddress={setFullAddress}
          setSearch={setSearch}
          setProvince={setProvince}
          setWards={setWards}
          setShow={setShow}
          setCurrent={setCurrent}
          setDistrict={setDistrict}
          item={item}
          setItem={setItem}
          setList={setList}
          setListCurrent={setListCurrent}
          current={current}
        />
      </div>
    </div>
  );
}

export default CreateAddress;
