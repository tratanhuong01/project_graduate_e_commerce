import React from "react";

function TypeAddress(props) {
  //
  const { setTypeAddress, typeAddress } = props;
  //
  return (
    <div className="w-full px-2 my-t bg-white">
      <hr className="my-3" />
      <p className="mb-3 text-gray-700">Loại địa chỉ</p>
      <div className="flex items-center text-sm">
        <button
          onClick={() => setTypeAddress(typeAddress !== 1 ? 1 : 0)}
          type="button"
          className={`font-semibold border-solid border-2 px-5 py-2 
          ${
            typeAddress === 1
              ? " text-organce border-organce "
              : " text-gray-600 border-gray-300 "
          }`}
        >
          Nhà riêng
        </button>
        <button
          onClick={() => setTypeAddress(typeAddress !== 2 ? 2 : 0)}
          type="button"
          className={`font-semibold border-solid border-2 px-5 py-2 ml-5 
          ${
            typeAddress === 2
              ? " text-organce border-organce "
              : " text-gray-600 border-gray-300 "
          }`}
        >
          Văn phòng
        </button>
      </div>
    </div>
  );
}

export default TypeAddress;
