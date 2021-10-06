import React from "react";

function PopupItemAttributeFilter(props) {
  //
  const { index } = props;
  //
  return (
    <div
      className="p-1 rounded-lg shadow-lg absolute top-full 
      bg-white left-0 mt-3.5"
      style={{
        width: 500,
        boxShadow: "0 2px 20px rgb(0 0 0 / 50%)",
        zIndex: index,
      }}
    >
      <div className="arrow-up-popup absolute"></div>
      <div
        className="w-full h-full relative overflow-y-auto scrollbar-css"
        style={{
          width: 500,
          maxWidth: 500,
          maxHeight: 150,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default PopupItemAttributeFilter;
