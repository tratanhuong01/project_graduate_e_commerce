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
            } h-1 absolute right-full`}
          ></span>
        )}
        <i
          className={`${icon} text-3xl ${
            statusLineLeft ? "text-green" : "text-gray-400"
          }`}
        ></i>
        {right && (
          <span
            className={`w-20 ${
              statusLineRight ? "bg-green" : "bg-gray-400"
            } h-1 absolute left-full`}
          ></span>
        )}
      </div>
      <div className="h-12 flex items-center flex-col">
        <p className="text-gray-600 font-semibold my-1 text-sm">{label}</p>
        <p className="text-gray-400 font-semibold text-xs flex items-center">
          {statusLineLeft ? "16:30:30 16-08-2021" : ""}
        </p>
      </div>
    </div>
  );
}

export default ItemStatusDetailBill;
