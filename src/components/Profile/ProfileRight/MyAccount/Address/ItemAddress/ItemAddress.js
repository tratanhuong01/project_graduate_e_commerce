import React from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../../../../actions/modal/index";
import api from "../../../../../../Utils/api";
import AddressMain from "../../../../../General/AddressMain/AddressMain";

function ItemAddress(props) {
  //
  const { address, deleteAddress, setAddresses, user } = props;
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full flex items-center py-5 border-b-2 border-solid border-gray-200 relative  dark:text-white text-gray-600">
      <div className="w-full xl:w-3/4 flex">
        <AddressMain address={address} />
      </div>
      <div className="absolute bottom-4 xl:relative xl:bottom-auto xl:w-1/4 lg:flex flex-col items-end  right-2">
        <div className="flex">
          <span
            onClick={() =>
              dispatch(modalsAction.openModalAddress(address, setAddresses))
            }
            className="mx-2 underline cursor-pointer mb-4"
          >
            Sửa
          </span>
          {address.isDefault === 0 && (
            <span
              onClick={async () => {
                let data = await deleteAddress(address);
                setAddresses(data);
              }}
              className="mx-2 underline cursor-pointer mb-4 ml-4"
            >
              Xóa
            </span>
          )}
        </div>

        {address.isDefault === 0 && (
          <button
            onClick={() => {
              let unmounted = false;
              async function fetch() {
                const result = await api(
                  `setDefaultAddress/${user.id}/${address.id}`,
                  "PUT",
                  null
                );
                if (unmounted) return;
                setAddresses(result.data);
              }
              fetch();
              return () => (unmounted = true);
            }}
            className="border-2 border-solid border-gray-300 px-3 py-2 ml-5"
          >
            Thiết lập mặc định
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemAddress;
