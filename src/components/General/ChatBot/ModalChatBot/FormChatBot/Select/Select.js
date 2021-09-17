import React from "react";

function Select(props) {
  //
  const { name, register, showError, label } = props;
  //
  return (
    <div className={`w-full my-2 relative`}>
      {label && (
        <label
          className={`text-gray-800 dark:text-white bg-white text-sm px-1 mb-2 font-semibold flex`}
        >
          {label}
        </label>
      )}
      <select
        name={name}
        {...register(name)}
        className={`w-full p-2 text-sm mr-5 flex bg-white cursor-pointer relative 
     ${
       showError ? "border-red-500" : "border-gray-200"
     } border-2 border-solid px-1 rounded-lg`}
      >
        <option value={""}>Chọn cách xưng hô với quý khách</option>
        <option value={"Anh"}>Anh</option>
        <option value={"Chị"}>Chị</option>
      </select>
      {showError && (
        <p className="m-1 text-red-500 font-semibold">{showError.message}</p>
      )}
    </div>
  );
}

export default Select;
