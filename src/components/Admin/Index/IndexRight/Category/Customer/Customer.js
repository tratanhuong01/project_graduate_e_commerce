import React from "react";
import Control from "../../General/Control/Control";
import DateAndFile from "../../General/DateAndFile/DateAndFile";
import Pagination from "../../General/Pagination/Pagination";
import Table from "../../General/Table/Table";

function Customer(props) {
  return (
    <div
      className="w-full p-5 bg-gray-100 overflow-y-auto h-full scrollbar-css"
      style={{ height: "calc(100% - 76px)", maxHeight: "calc(100% - 76px)" }}
    >
      <div className="w-full flex py-2 relative">
        <div className="mr-10 flex">
          <p className="text-2xl font-bold flex items-center">
            Quản lí khách hàng
          </p>
        </div>
        <DateAndFile />
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
