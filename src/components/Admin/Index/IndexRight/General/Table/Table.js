import React from "react";
import RowTable from "../RowTable/RowTable";
import Title from "../Title/Title";

function Table(props) {
  return (
    <div className="w-full wrapper-content-right overflow-x-auto max-w-full p-3">
      <table className="w-full bg-white">
        <tbody>
          <Title />
          <RowTable />
          <RowTable />
          <RowTable />
          <RowTable />
          <RowTable />
          <RowTable />
          <RowTable />
          <RowTable />
          <RowTable />
          <RowTable />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
