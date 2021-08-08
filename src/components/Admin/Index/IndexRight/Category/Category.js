import React from "react";
import Control from "../General/Control/Control";
import Pagination from "../General/Pagination/Pagination";
import Table from "../General/Table/Table";
import loading from "../../../../../config/function/loading";
import Date from "../General/Date/Date";
import ButtonAddCustom from "../General/ButtonAddCustom/ButtonAddCustom";
import FileDown from "../General/FileDown/FileDown";

function Category(props) {
  //
  const { data } = props;
  //
  return (
    <div
      className="w-full p-5 bg-gray-100 overflow-y-auto h-full scrollbar-css"
      style={{ height: "calc(100% - 76px)", maxHeight: "calc(100% - 76px)" }}
    >
      <div className="w-full flex py-2 relative">
        <div className="mr-10 flex">
          <p className="text-2xl font-bold flex items-center">{data.label}</p>
        </div>
        <div className="w-auto flex items-center justify-end">
          {loading[data.type].filterAndSorter && <Date />}
          <FileDown />
          <ButtonAddCustom />
        </div>
      </div>
      {loading[data.type].filterAndSorter && (
        <Control type={data.type} data={loading[data.type]} />
      )}
      <div className="w-full  py-3">
        <Table type={data.type} title={loading[data.type].table} />
      </div>
      <Pagination type={data.type} />
    </div>
  );
}

export default Category;
