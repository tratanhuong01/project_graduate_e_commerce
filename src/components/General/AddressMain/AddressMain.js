import React from "react";

function AddressMain(props) {
  //
  const { address } = props;
  //
  return (
    <>
      <div className="w-1/4 flex-col flex items-end">
        <div className="flex py-0.5 items-center">Họ và tên</div>
        <div className="flex py-0.5 items-center">Số điện thoại</div>
        <div className="flex py-0.5 items-center">Địa chỉ</div>
      </div>
      <div className="w-3/4  ml-6 lg">
        <div className="w-full py-0.5 flex">
          <div className="flex items-center">{`${address.fullName}`}</div>
          <div
            className="absolute right-2 lg:relative top-auto left-auto flex 
         items-center flex-col lg:flex-row"
          >
            {address.isDefault === 1 && (
              <button
                className="rounded-full px-5 py-1 bg-green-500 text-white font-semibold ml-4 
              text-xs mb-2 lg:mb-0"
              >
                Mặc định
              </button>
            )}
            {address.typeAddress === 0 && (
              <button className="rounded-full px-5 py-1 border-organce border-solid border text-white font-semibold ml-4 text-xs text-organce mb-2 lg:mb-0">
                Nhà riêng
              </button>
            )}
            {address.typeAddress === 2 && (
              <button className="rounded-full px-5 py-1 border-organce border-solid border text-white font-semibold ml-4 text-xs text-organce mb-2 lg:mb-0">
                Văn phòng
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center my-0.5">{address.phone}</div>
        <div className="flex py-0.5 items-center">
          <ul className="flex flex-col">
            <li>{address.details}</li>
            <li>{JSON.parse(address.wards).WardName}</li>
            <li>{JSON.parse(address.district).DistrictName}</li>
            <li>{"Tỉnh " + JSON.parse(address.cityProvince).ProvinceName}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AddressMain;
