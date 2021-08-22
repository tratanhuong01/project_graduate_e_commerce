import React from "react";
import { useSelector } from "react-redux";
import FormAddress from "./FormAddress/FormAddress";

function ModalAddress(props) {
  //
  const { address, setAddresses } = props;
  const user = useSelector((state) => state.user);
  //
  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 rounded-lg bg-white py-4 px-3 dark:bg-dark-second"
      style={{ width: "37%" }}
    >
      <div className="my-5 px-2 text-gray-600 font-semibold text-2xl">
        Địa chỉ mới
      </div>
      <hr className="mb-3" />
      <FormAddress
        address={address}
        setAddresses={(addresses) => setAddresses(addresses)}
        user={user}
      />
    </div>
  );
}

export default ModalAddress;
