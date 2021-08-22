import axios from "axios";
import React, { useEffect, useState } from "react";
import InputSearchAddress from "./InputSearchAddress/InputSearchAddress";
import ItemAddressRender from "./ItemAddressRender/ItemAddressRender";

function CreateAddress(props) {
  //
  const [list, setList] = useState([]);
  const [listCurrent, setListCurrent] = useState([]);
  const [current, setCurrent] = useState(0);
  const [type, setType] = useState("p");
  const { setProvince, setDistrict, setWards, setShow } = props;
  const data = ["Tỉnh/Thành phố", "Quận/Huyện", "Phường/Xã"];
  const [search, setSearch] = useState("");
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await axios.get(
        `https://provinces.open-api.vn/api/p?depth=2`
      );
      if (unmounted) return;
      setList(result.data);
      setListCurrent(result.data);
    }
    fetch();
    return () => (unmounted = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let dataSearch = list;
  let dataRender = listCurrent;
  if (list.hasOwnProperty("districts")) dataSearch = list.districts;
  if (listCurrent.hasOwnProperty("districts"))
    dataRender = listCurrent.districts;
  if (list.hasOwnProperty("wards")) dataSearch = list.wards;
  if (listCurrent.hasOwnProperty("wards")) dataRender = listCurrent.wards;

  //
  return (
    <div className="w-full px-2 my-1 bg-white absolute top-full left-0 z-20">
      <div
        className="p-1 border-2 border-solid border-gray-300 
        text-gray-400 shadow-sm"
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
          type={type}
          current={current}
          dataSearch={dataSearch}
          setListCurrent={setListCurrent}
          search={search}
          setSearch={setSearch}
        />
        <ItemAddressRender
          dataRender={dataRender}
          setSearch={setSearch}
          setProvince={setProvince}
          setType={setType}
          setWards={setWards}
          setShow={setShow}
          setCurrent={setCurrent}
          setDistrict={setDistrict}
          type={type}
          setList={setList}
          setListCurrent={setListCurrent}
          current={current}
        />
      </div>
    </div>
  );
}

export default CreateAddress;
