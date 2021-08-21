import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemAddress from "./ItemAddress/ItemAddress";
import * as modalsAction from "../../../../../actions/modal/index";
import api from "../../../../../Utils/api";

async function deleteAddress(address) {
  const result = await api(`addresses/${address.id}`, "DELETE", null);
  return result.data;
}

function Address(props) {
  //
  const dispatch = useDispatch();
  const { user } = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const [addresses, setAddresses] = useState(null);
  useEffect(() => {
    let unmounted = false;
    async function fetch() {
      const result = await api(`addresses/${user.id}`, "GET", null);
      // In case the component was mounted, cancel set state here. Because it's not effect
      if (unmounted) return;
      setAddresses(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return addresses ? (
    <div className="w-full">
      <div className="w-full flex text-gray-600 mb-5">
        <div className="w-1/2 flex items-center font-semibold text-2xl">
          Địa chỉ của tôi
        </div>
        <div className="w-1/2 justify-end flex">
          <button
            type="button"
            onClick={() =>
              dispatch(modalsAction.openModalAddress(null, setAddresses))
            }
            className="p-2.5 flex items-center text-white font-semibold 
            bg-organce"
          >
            <span className="bx bx-plus text-2xl mr-1"></span>
            <span className="text-sm">Thêm địa chỉ</span>
          </button>
        </div>
      </div>
      {addresses.length > 0 ? (
        addresses.map((address, index) => {
          return (
            <ItemAddress
              address={address}
              key={index}
              user={user}
              setAddresses={setAddresses}
              deleteAddress={deleteAddress}
            />
          );
        })
      ) : (
        <div
          className="w-full h-80 flex items-center justify-center text-xl 
          text-gray-600"
        >
          Bạn chưa thêm bất kì địa chỉ nào
        </div>
      )}
    </div>
  ) : (
    <div className="w-full relative">
      <i
        className="fas fa-circle-notch fa-spin text-5xl text-organce absolute top-32 left-1/2 transform 
      -translate-x-1/2"
      ></i>
    </div>
  );
}

export default Address;
