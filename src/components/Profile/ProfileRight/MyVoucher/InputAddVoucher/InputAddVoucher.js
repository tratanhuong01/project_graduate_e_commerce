import React, { useState } from "react";

function InputAddVoucher(props) {
  //
  const [code, setCode] = useState("");
  //
  return (
    <div className="w-full flex items-center justify-center py-10 h-20">
      <div className="w-3/4 p-2 flex items-center justify-center">
        <span className="dark:text-gray-300">Mã giảm giá</span>
        <input
          type="text"
          placeholder="Mã giảm giá"
          className="w-2/3 focus:border-blue-500 border-2 border-solid border-gray-200 rounded-sm  
          mx-2 p-2.5 dark:bg-dark-third dark:text-white dark:border-dark-third shadow-lg"
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
        <button
          onClick={() => alert("hêlo")}
          className={`font-semibold p-2.5 border-2 border-solid px-5 rounded-sm 
          ${
            code.length >= 1
              ? "bg-organce border-organce text-white"
              : "bg-gray-200 border-gray-200 text-gray-500 cursor-not-allowed"
          }`}
          disabled={code.length >= 1 ? false : true}
        >
          Lưu
        </button>
      </div>
    </div>
  );
}

export default InputAddVoucher;
