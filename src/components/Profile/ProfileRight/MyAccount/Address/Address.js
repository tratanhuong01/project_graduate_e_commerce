import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemAddress from "./ItemAddress/ItemAddress";
import * as modalsAction from "../../../../../actions/modal/index";
import * as profileApi from "../../../../../api/profileApi";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import {
  PAGE_PROFILE_USER,
  PROFILE_ADDRESS,
} from "../../../../../constants/Config";

async function deleteAddress(address, headers) {
  let data = null;
  try {
    const result = await profileApi.deleteAddress(
      address.id,
      address.addressUser.id,
      headers
    );
    data = result.data;
  } catch (error) {
    throw error;
  }
  return data;
}

function Address(props) {
  //
  const dispatch = useDispatch();
  const { user, headers } = useSelector((state) => {
    return {
      user: state.user,
      headers: state.headers,
    };
  });
  const [addresses, setAddresses] = useState(null);
  useEffect(() => {
    let unmounted = false;
    async function fetch() {
      try {
        const result = await profileApi.getAddressByIdUser(user.id, headers);
        // In case the component was mounted, cancel set state here. Because it's not effect
        if (unmounted) return;
        setAddresses(result.data);
      } catch (error) {
        throw error;
      }
    }
    const timeOut = setTimeout(() => {
      fetch();
    }, 500);

    return () => {
      unmounted = true;
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="w-full">
      <BreadcrumbsItem to={`${PAGE_PROFILE_USER}/${PROFILE_ADDRESS}`}>
        Địa chỉ
      </BreadcrumbsItem>
      <div className="w-full flex text-gray-600 mb-5 dark:text-white">
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
      {addresses ? (
        addresses.length > 0 ? (
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
        )
      ) : (
        <div className="w-full relative">
          <i
            className="fas fa-circle-notch fa-spin text-5xl text-organce absolute top-32 left-1/2 transform 
             -translate-x-1/2"
          ></i>
        </div>
      )}
    </div>
  );
}

export default Address;
