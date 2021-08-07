import React from "react";
import Control from "../../General/Control/Control";
import Pagination from "../../General/Pagination/Pagination";
import Table from "../../General/Table/Table";

function Customer(props) {
  return (
    <div
      className="w-full p-5 bg-gray-100 overflow-y-auto h-full scrollbar-css"
      style={{ height: "calc(100% - 76px)", maxHeight: "calc(100% - 76px)" }}
    >
      <div className="w-full flex py-2">
        <div className="w-1/3 mr-10 flex">
          <p className="text-2xl font-bold flex items-center">
            Quản lí khách hàng
          </p>
        </div>
        <div className="w-2/3 flex items-center justify-end">
          <span className="mr-2 flex items-center font-bold">Từ ngày</span>
          <input
            type="date"
            className="p-2.5 w-48 flex items-center mx-2 rounded-lg"
          />
          <span className="mr-2 flex items-center font-bold">Đến ngày</span>
          <input
            type="date"
            className="p-2.5 w-48 flex items-center mx-2 rounded-lg"
          />
          <button className="px-5 py-2 bg-blue-500 text-white font-bold rounded-lg">
            <i className="bx bxs-download mr-3"></i>Tải xuống
          </button>
        </div>
      </div>
      <Control type={"customer"} />
      <div className="w-full  py-3">
        <Table />
      </div>
      <Pagination />
    </div>
  );
}

export default Customer;
