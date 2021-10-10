import React from "react";
import { useSelector } from "react-redux";
import ModalWrapper from "../../../../containers/ModalWrapper";
import CloseModal from "../../../General/CloseModal/CloseModal";
import FormAddress from "./FormAddress/FormAddress";

function ModalAddress(props) {
  //
  const { address, setAddresses } = props;
  const { modal, user } = useSelector((state) => {
    return {
      modal: state.modal,
      user: state.user,
    };
  });
  //
  return (
    <ModalWrapper
      notHeader={true}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 rounded-lg bg-white pb-5 px-3 dark:bg-dark-second"
      style={{ width: "37%" }}
    >
      {modal.loading && <CloseModal addEvent={() => ""} fixed={true} />}
      <div className="my-5 px-2 text-gray-600 font-semibold text-2xl">
        Địa chỉ mới
      </div>
      <hr className="mb-3" />
      <FormAddress
        address={address}
        setAddresses={(addresses) => setAddresses(addresses)}
        user={user}
      />
    </ModalWrapper>
  );
}

export default ModalAddress;
