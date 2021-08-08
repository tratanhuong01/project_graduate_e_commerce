import React, { useState } from "react";
import ButtonAddCustom from "../ButtonAddCustom/ButtonAddCustom";

function DateAndFile(props) {
  //
  const [show, setShow] = useState(false);
  //
  return (
    <div className="w-auto flex items-center justify-end">
      <span className="mr-2 flex items-center font-bold">Từ</span>
      <input
        type="date"
        className="p-2.5 w-44 flex items-center mx-2 rounded-lg"
      />
      <span className="mr-2 flex items-center font-bold">Đến</span>
      <input
        type="date"
        className="p-2.5 w-44 flex items-center mx-2 rounded-lg"
      />
      <div
        onClick={() => setShow(!show)}
        className="w-40 p-3 mr-5 font-semibold flex bg-white cursor-pointer relative"
      >
        <p className="items-center">Chọn dạng file</p>
        <i className="fas fa-caret-down absolute right-3 top-4"></i>
        {show && (
          <div
            className="w-40 bg-white border-2 border-solid border-gray-200 p-1 
          font-semibold absolute top-full left-0 shadow-lg"
          >
            <div className="w-full p-2">Exel</div>
            <div className="w-full p-2">Word</div>
            <div className="w-full p-2">PDF</div>
          </div>
        )}
      </div>
      <button className="px-5 py-2 bg-blue-500 text-white font-bold rounded-lg">
        <i className="bx bxs-download mr-3"></i>Tải xuống
      </button>
      <ButtonAddCustom />
    </div>
  );
}

export default DateAndFile;
