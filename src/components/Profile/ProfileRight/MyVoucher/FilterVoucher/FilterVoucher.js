import React from "react";

function FilterVoucher(props) {
  //
  const { setData, setVouchers, data } = props;
  //
  return (
    <div className="w-full my-3 flex justify-end items-center p-1">
      <select
        onChange={(event) => {
          setVouchers(null);
          setData(event.target.value);
        }}
        className="w-60 border-2 border-solid border-gray-200 py-2 px-0.5"
      >
        <option value={0} defaultValue={data}>
          Mới nhất
        </option>
        <option value={2} defaultValue={data}>
          Sắp hết hạn
        </option>
      </select>
    </div>
  );
}

export default FilterVoucher;
