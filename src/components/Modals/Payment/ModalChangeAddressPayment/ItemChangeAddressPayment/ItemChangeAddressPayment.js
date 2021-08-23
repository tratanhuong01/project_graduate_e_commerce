import React from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../../../actions/modal/index";
import AddressMain from "../../../../General/AddressMain/AddressMain";

function ItemChangeAddressPayment(props) {
  //
  const dispatch = useDispatch();
  const { address, setAddress, addressCurrent } = props;
  //
  return (
    <div class="w-full flex items-center py-5 border-b-2 border-solid border-gray-200 relative  dark:text-white text-gray-600">
      <div className="w-2/12 flex items-center justify-center">
        <input
          type="radio"
          name="address"
          onChange={() => {
            setAddress(address);
            dispatch(modalsAction.closeModal());
          }}
          className="transform scale-150 "
          checked={address.id === addressCurrent.id ? true : false}
        />
      </div>
      <div class="w-10/12 flex">
        <AddressMain address={address} />
      </div>
    </div>
  );
}

export default ItemChangeAddressPayment;
