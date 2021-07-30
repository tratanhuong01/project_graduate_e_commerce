import React from "react";

function Price(props) {
  return (
    <>
      <p className="text-xl my-3 font-semibold">Lọc giá</p>
      <div className="w-full my-2 flex">
        <div className="flex items-center">
          <input
            type="text"
            name="from"
            className="w-1/2 text-sm bg-white p-2 mb-2 text-center"
            placeholder="Từ"
          />
          <i className="bx bxs-right-arrow-alt text-gray-700 text-xl"></i>
          <input
            type="text"
            name="to"
            className="w-1/2 bg-white text-sm p-2 mb-2 rounded-xl text-center"
            placeholder="Đến"
          />
        </div>
      </div>
      <button
        type="button"
        className="px-5 py-2 my-2 bg-organce text-white font-semibold 
                rounded-full"
      >
        Lọc giá
      </button>
    </>
  );
}

export default Price;
