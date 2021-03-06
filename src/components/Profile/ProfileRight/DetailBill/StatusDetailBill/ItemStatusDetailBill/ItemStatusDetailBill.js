import React, { useEffect } from "react";

function ItemStatusDetailBill(props) {
  //
  const {
    left,
    right,
    statusLineLeft,
    statusLineRight,
    icon,
    label,
    time,
    bill,
    visible,
    invisible,
  } = props;
  const string = () => {
    if (invisible && visible === -1) return "";
    if (!invisible && visible === -1) return "invisible";
    if (!invisible && visible !== -1) return "";
  };
  useEffect(() => { }, [bill]);
  //
  return (
    <div
      className={`flex items-center justify-center flex-col ${string()}`}
      style={{ width: "calc(100% / 5)" }}
    >
      <div
        className={`w-16 h-16 p-1 border-4 border-solid ${statusLineLeft ? "border-green" : "border-gray-400"
          } rounded-full flex 
        items-center justify-center relative`}
      >
        {left && (
          <span
            className={`${visible === -1 ? "w-96" : "w-20"} ${statusLineLeft ? "bg-green" : "bg-gray-400"
              } h-1 absolute right-full z-0`}
          ></span>
        )}
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center absolute top-0 left-0 z-50 
        bg-white dark:bg-dark-second"
        >
          <i
            className={`${icon} text-3xl ${statusLineLeft ? "text-green" : "text-gray-400 dark:text-gray-300"
              }`}
          ></i>
        </div>
        {right && (
          <span
            className={`${visible === -1 ? "w-96" : "w-20"} ${statusLineRight ? "bg-green" : "bg-gray-400"
              } h-1 absolute left-full z-0`}
          ></span>
        )}
      </div>
      <div className="h-12 flex items-center flex-col w-full px-1">
        <p className="text-gray-600 font-semibold my-1 text-sm text-center dark:text-white">
          {label}
        </p>
        <p className="text-gray-600 font-semibold text-xs flex items-center text-center  dark:text-gray-300">
          {time ? time : <i className="fas fa-circle-notch fa-spin text-xs text-organce"></i>}
        </p>
      </div>
    </div>
  );
}

export default ItemStatusDetailBill;
