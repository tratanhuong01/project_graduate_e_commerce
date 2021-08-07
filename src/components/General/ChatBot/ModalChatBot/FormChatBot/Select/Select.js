import React from "react";

function Select(props) {
  //
  const { name } = props;
  //
  return (
    <select
      name={name}
      className="w-full p-2 text-sm mr-5 flex bg-white cursor-pointer relative 
      border-gray-200 border-2 border-solid px-1 rounded-lg"
    >
      <option value={null}>Chọn cách xưng hô với quý khách</option>
      <option value={"Anh"}>Anh</option>
      <option value={"Chị"}>Chị</option>
    </select>
  );
}

export default Select;
