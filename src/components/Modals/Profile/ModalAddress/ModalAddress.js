import React from "react";
import FormAddress from "./FormAddress/FormAddress";

function ModalAddress(props) {
  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 rounded-lg bg-white py-4 px-3"
      style={{ width: "37%" }}
    >
      <div className="my-5 px-2 text-gray-600 font-semibold text-2xl">
        Địa chỉ mới
      </div>
      <hr className="mb-3" />
      <FormAddress />
    </div>
  );
}

export default ModalAddress;
