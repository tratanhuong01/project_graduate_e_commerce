import React from "react";
import Control from "../Control/Control";
import Content from "./Content/Content";

function Customer(props) {
  return (
    <div
      className="w-full p-5 bg-gray-100 overflow-y-auto wrapper-content-right"
      style={{ height: "685px", maxHeight: "685px" }}
    >
      <Control />
      <Content />
    </div>
  );
}

export default Customer;
