import React from "react";

function ItemStatusDetailBill(props) {
  //
  const { left, right, statusLineLeft, statusLineRight, icon, label } = props;
  //
  return (
    <div
      className="flex items-center justify-center flex-col"
      style={{ width: "calc(100% / 5)" }}
    >
      <div
        className={`w-16 h-16 p-1 border-4 border-solid ${
          statusLineLeft ? "border-green" : "border-gray-400"
        } rounded-full flex 
        items-center justify-center relative`}
      >
        {left && (
          <span
            className={`w-20 ${
              statusLineLeft ? "bg-green" : "bg-gray-400"
            } h-1 absolute right-full z-0`}
          ></span>
        )}
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center absolute top-0 left-0 z-50 
        bg-white dark:bg-dark-second"
        >
          <i
            className={`${icon} text-3xl ${
              statusLineLeft ? "text-green" : "text-gray-400 dark:text-gray-300"
            }`}
          ></i>
        </div>
        {right && (
          <span
            className={`w-20 ${
              statusLineRight ? "bg-green" : "bg-gray-400"
            } h-1 absolute left-full z-0`}
          ></span>
        )}
      </div>
      <div className="h-12 flex items-center flex-col w-full px-1">
        <p className="text-gray-600 font-semibold my-1 text-sm text-center dark:text-white">
          {label}
        </p>
        <p className="text-gray-400 font-semibold text-xs flex items-center text-center  dark:text-gray-300">
          {statusLineLeft ? "16:30:30 16-08-2021" : ""}
        </p>
      </div>
    </div>
  );
}

export default ItemStatusDetailBill;
