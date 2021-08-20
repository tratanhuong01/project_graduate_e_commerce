import React, { useState } from "react";
import ItemStatusBill from "./ItemStatusBill/ItemStatusBill";

function StatusBill(props) {
  //
  const [show, setShow] = useState(false);
  const status = [
    "Tất cả",
    "Chờ xác nhận",
    "Chờ lấy hàng",
    "Đang giao",
    "Đã giao",
    "Đã hủy",
  ];
  const [data, setData] = useState(status[0]);
  //
  return (
    <>
      <div className="w-full text-gray-600 shadow-md hidden sm:flex">
        {status.map((name, index) => {
          return (
            <ItemStatusBill
              onClick={setData}
              active={data === name ? true : false}
              label={name}
              key={index}
            />
          );
        })}
      </div>
      <div
        onClick={() => setShow(!show)}
        className="w-full px-3 py-2 rounded-lg border-2 border-solid border-gray-300 
        font-semibold text-gray-800 relative cursor-pointer sm:hidden"
      >
        {data}
        <span className="bx bx-chevron-down text-xl absolute top-2 right-2"></span>
        {show && (
          <div className="w-full absolute top-full my-1 bg-white left-0 z-30">
            {status.map((name, index) => {
              return (
                <div
                  onClick={() => {
                    setData(name);
                    setShow(false);
                  }}
                  key={index}
                  className="w-full p-2 hover:bg-gray-100"
                >
                  {name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default StatusBill;
