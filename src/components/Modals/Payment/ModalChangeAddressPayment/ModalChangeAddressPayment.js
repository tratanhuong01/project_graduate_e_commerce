import React from "react";
import ModalWrapper from "../../../../containers/ModalWrapper";
import ItemChangeAddressPayment from "./ItemChangeAddressPayment/ItemChangeAddressPayment";

function ModalChangeAddressPayment(props) {
  //
  const { addresses, address, setAddress } = props;
  //
  return (
    <ModalWrapper
      title="Thay đổi địa chỉ"
      className="w-11/12 xl:w-5/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-lg z-50 animate__animated animate__fadeIn bg-white dark:bg-dark-main"
      styleChildren={{ height: "61vh", maxHeight: "85vh" }}
    >
      <div className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-css">
        {addresses.map((item, index) => {
          return (
            <ItemChangeAddressPayment
              address={item}
              key={index}
              addressCurrent={address}
              setAddress={setAddress}
            />
          );
        })}
      </div>
    </ModalWrapper>
  );
}

export default ModalChangeAddressPayment;
