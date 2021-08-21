import React from "react";
import ItemNotify from "../components/Notify/ItemNotify";

function Notify(props) {
  return (
    <div
      className="fixed w-80 p-2 max-h-80 overflow-hidden left-6 bottom-6 z-40 
      hidden"
    >
      <ItemNotify />
    </div>
  );
}

export default Notify;
