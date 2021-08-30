import React from "react";

function PopupItemAttributeFilter(props) {
  return (
    <div
      className="p-1 rounded-lg shadow-lg absolute top-full 
      bg-white z-40 left-0 mt-3.5"
      style={{
        width: 500,
        boxShadow: "0 2px 20px rgb(0 0 0 / 50%)",
      }}
    >
      <div className="arrow-up-popup absolute"></div>
      <div
        className="w-full h-full relative overflow-y-auto scrollbar-css"
        style={{
          width: 500,
          height: 200,
          maxHeight: 200,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default PopupItemAttributeFilter;
