import React from "react";
import CloseModal from "../../../General/CloseModal/CloseModal";
import ItemChangeAddressPayment from "./ItemChangeAddressPayment/ItemChangeAddressPayment";

function ModalChangeAddressPayment(props) {
  //
  const { addresses, setAddress, address } = props;
  //
  return (
    <div
      className="w-11/12 xl:w-5/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-lg z-50 animate__animated animate__fadeIn bg-white overflow-y-auto scrollbar-css 
        dark:bg-dark-main"
      style={{ maxHeight: "70vh" }}
    >
      <div className="w-full sticky pb-2 top-0 z-50 bg-white shadow-lg">
        <div className="w-full py-3 font-semibold text-xl text-center relative">
          Thay đổi địa chỉ
          <CloseModal />
        </div>
      </div>
      <div className="w-full">
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
    </div>
  );
}

export default ModalChangeAddressPayment;
