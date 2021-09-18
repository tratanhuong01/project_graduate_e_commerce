import React, { useState } from "react";

function TypeAddress(props) {
  //
  const { setTypeAddress, typeAddress } = props;
  const [type, setType] = useState(typeAddress);
  //
  return (
    <div className="w-full px-2 my-t bg-white dark:bg-dark-second">
      <hr className="my-3" />
      <p className="mb-3 text-gray-700 dark:text-white">Loại địa chỉ</p>
      <div className="flex items-center text-sm">
        <button
          onClick={() => {
            setType(type !== 1 ? 1 : 0);
            setTypeAddress(type !== 1 ? 1 : 0);
          }}
          type="button"
          className={`font-semibold border-solid border-2 px-5 py-2 
          ${
            type === 1
              ? " text-organce border-organce "
              : " text-gray-600 border-gray-300  dark:text-white"
          }`}
        >
          Nhà riêng
        </button>
        <button
          onClick={() => {
            setTypeAddress(type !== 2 ? 2 : 0);
            setType(type !== 2 ? 2 : 0);
          }}
          type="button"
          className={`font-semibold border-solid border-2 px-5 py-2 ml-5 
          ${
            type === 2
              ? " text-organce border-organce "
              : " text-gray-600 border-gray-300  dark:text-white"
          }`}
        >
          Văn phòng
        </button>
      </div>
    </div>
  );
}

export default TypeAddress;
