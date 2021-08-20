import React from "react";

function ItemAddress(props) {
  return (
    <div className="w-full flex items-center py-5 border-b-2 border-solid border-gray-200 relative">
      <div className="w-full xl:w-3/4 flex text-gray-600">
        <div className="w-1/4 flex-col flex items-end">
          <div className="flex py-2 items-center">Họ và tên</div>
          <div className="flex py-2 items-center">Số điện thoại</div>
          <div className="flex py-2 items-center">Địa chỉ</div>
        </div>
        <div className="w-3/4  ml-6 lg">
          <div className="w-full py-2 flex">
            <div className="flex items-center">Trà Hưởng</div>
            <div
              className="absolute top-5 right-2 lg:relative top-auto left-auto flex 
               items-center flex-col lg:flex-row"
            >
              <button
                className="rounded-full px-5 py-1 bg-green-500 text-white font-semibold ml-4 
                text-xs mb-2 lg:mb-0"
              >
                Mặc định
              </button>
              <button className="rounded-full px-5 py-1 border-organce border-solid border text-white font-semibold ml-4 text-xs text-organce mb-2 lg:mb-0">
                Địa chỉ lấy hàng
              </button>
              <button className="rounded-full px-5 py-1 border-organce border-solid border text-white font-semibold ml-4 text-xs text-organce mb-2 lg:mb-0">
                Địa chỉ trả hàng
              </button>
            </div>
          </div>
          <div className="flex items-center my-2">(+84) 354114665</div>
          <div className="flex py-1.5 items-center">
            <ul className="flex flex-col">
              <li>35 Nguyễn Đình Hiến</li>
              <li>Phường Hòa Quý</li>
              <li> Quận Ngũ Hành</li>
              <li> Sơn Đà Nẵng</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 xl:relative xl:bottom-auto xl:w-1/4 lg:flex flex-col items-end text-gray-600 right-2">
        <span className="mx-2 underline cursor-pointer mb-4">Xóa</span>
        <button className="border-2 border-solid border-gray-300 px-3 py-2 ml-5">
          Thiết lập mặc định
        </button>
      </div>
    </div>
  );
}

export default ItemAddress;
