import React from "react";
import ItemAddress from "./ItemAddress/ItemAddress";

function Address(props) {
  return (
    <div className="w-full">
      <div className="w-full flex text-gray-600 mb-5">
        <div className="w-1/2 flex items-center font-semibold text-2xl">
          Địa chỉ của tôi
        </div>
        <div className="w-1/2 justify-end flex">
          <button
            className="p-2.5 flex items-center text-white font-semibold 
          bg-organce"
          >
            <span className="bx bx-plus text-2xl mr-1"></span>
            <span className="text-sm">Thêm địa chỉ</span>
          </button>
        </div>
      </div>
      <div
        className="w-full h-80 flex items-center justify-center text-xl 
        text-gray-600 hidden"
      >
        Bạn chưa thêm bất kì địa chỉ nào
      </div>
      <ItemAddress />
      <ItemAddress />
    </div>
  );
}

export default Address;
