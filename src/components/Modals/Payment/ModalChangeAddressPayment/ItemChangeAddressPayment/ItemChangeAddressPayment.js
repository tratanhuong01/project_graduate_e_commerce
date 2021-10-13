import React from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../../../actions/modal/index";
import AddressMain from "../../../../General/AddressMain/AddressMain";
import * as ordersAction from "../../../../../actions/order/index";

function ItemChangeAddressPayment(props) {
  //
  const dispatch = useDispatch();
  const { address, addressCurrent, setAddress } = props;
  //
  return (
    <div
      onClick={() => {
        dispatch(ordersAction.loadInfoAddressPayment(address));
        dispatch(modalsAction.closeModal());
        setAddress(address);
      }}
      className="w-full flex items-center py-5 border-b-2 border-solid border-gray-200 relative  dark:text-white text-gray-600 hover:bg-gray-200 cursor-pointer dark:hover:bg-dark-main"
    >
      <div className="w-2/12 flex items-center justify-center">
        <input
          type="radio"
          name="address"
          className="transform scale-150 "
          onChange={() => setAddress(address)}
          checked={address.id === addressCurrent.id ? true : false}
        />
      </div>
      <div className="w-10/12 flex">
        <AddressMain address={address} />
      </div>
    </div>
  );
}

export default ItemChangeAddressPayment;
