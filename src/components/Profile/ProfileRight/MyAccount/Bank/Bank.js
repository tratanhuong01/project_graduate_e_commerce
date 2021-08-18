import React from "react";
import ItemBank from "./ItemBank/ItemBank";

function Bank(props) {
  return (
    <div className="w-full">
      <div className="w-full flex text-gray-600 mb-5">
        <div className="w-1/2 flex items-center font-semibold text-2xl">
          Tài khoản ngân hàng của tôi
        </div>
        <div className="w-1/2 justify-end flex">
          <button
            className="p-2.5 flex items-center text-white font-semibold 
          bg-organce"
          >
            <span className="bx bx-plus text-2xl mr-1"></span>
            <span className="text-sm">Thêm tài khoản ngân hàng</span>
          </button>
        </div>
      </div>
      <div
        className="w-full h-80 flex items-center justify-center text-xl 
        text-gray-600 hidden"
      >
        Bạn chưa thêm bất kì thẻ nào
      </div>
      <ItemBank />
      <ItemBank />
      <ItemBank />
      <ItemBank />
    </div>
  );
}

export default Bank;
