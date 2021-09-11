import React from "react";
import ItemPopupNotify from "./ItemPopupNotify/ItemPopupNotify";

function PopupNotify(props) {
  return (
    <div
      className="rounded-sm absolute -top-4 mt-16 right-3  z-main border-2 border-solid 
      border-gray-200 animate__animated animate__zoomIn"
      style={{
        width: 380,
        boxShadow: "0 2px 20px rgb(0 0 0 / 50%)",
      }}
      id="notify__popup"
    >
      <div className="w-full relative bg-white z-50 h-full">
        <ItemPopupNotify />
      </div>
    </div>
  );
}

export default PopupNotify;
