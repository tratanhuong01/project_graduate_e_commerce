import axios from "axios";
import React, { useEffect, useState } from "react";

function CreateAddress(props) {
  //
  const [list, setList] = useState([]);
  const [current, setCurrent] = useState(0);
  const [type, setType] = useState("p");
  const { setProvince, setDistrict, setWards, setShow } = props;
  const data = ["Tỉnh/Thành phố", "Quận/Huyện", "Phường/Xã"];
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await axios.get(
        `https://provinces.open-api.vn/api/p?depth=2`
      );
      if (unmounted) return;
      setList(result.data);
    }
    fetch();
    return () => (unmounted = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let dataRender = [];
  if (list.hasOwnProperty("districts")) dataRender = list.districts;
  else if (list.hasOwnProperty("wards")) dataRender = list.wards;
  else dataRender = list;
  //
  return (
    <div className="w-full px-2 my-1 bg-white absolute top-full left-0 z-20">
      <div
        className="p-1 border-2 border-solid border-gray-300 
        text-gray-400 shadow-sm"
      >
        <ul className="w-full flex">
          {data.map((item, index) => {
            if (current === index)
              return (
                <li
                  key={index}
                  className="w-1/3 text-center py-2 border-b-2 border-solid border-organce 
                  text-organce cursor-pointer font-semibold"
                >
                  {item}
                </li>
              );
            else
              return (
                <li
                  key={index}
                  className="w-1/3 text-center py-2 border-b-2 border-solid border-white 
                text-gray-600 cursor-pointer cursor-not-allowed"
                >
                  {item}
                </li>
              );
          })}
        </ul>
        <div
          className="w-full text-gray-800 h-56 max-h-56 overflow-y-auto my-1 
         scrollbar-css"
        >
          {dataRender.map((item, index) => {
            return (
              <div
                onClick={() => {
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
                    setList({ ...result.data });
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
      </div>
    </div>
  );
}

export default CreateAddress;
