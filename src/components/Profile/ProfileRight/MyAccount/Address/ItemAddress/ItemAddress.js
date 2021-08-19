import React from "react";

function ItemAddress(props) {
  return (
    <div className="w-full flex items-center py-5 border-b-2 border-solid border-gray-200">
      <div className="w-3/4 flex text-gray-600">
        <div className="w-1/4 flex-col flex items-end">
          <div className="flex py-2 items-center">Họ và tên</div>
          <div className="flex py-2 items-center">Số điện thoại</div>
          <div className="flex py-2 items-center">Địa chỉ</div>
        </div>
        <div className="w-3/4 ml-6">
          <div className="flex py-2 items-center">
            Trà Hưởng
            <button
              className="rounded-full px-5 py-1 bg-green-500 text-white font-semibold ml-4 
                text-xs "
            >
              Mặc định
            </button>
            <button className="rounded-full px-5 py-1 border-organce border-solid border text-white font-semibold ml-4 text-xs text-organce">
              Địa chỉ lấy hàng
            </button>
            <button className="rounded-full px-5 py-1 border-organce border-solid border text-white font-semibold ml-4 text-xs text-organce">
              Địa chỉ trả hàng
            </button>
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
      <div className="w-1/4 flex flex-col items-end text-gray-600">
        <span className="mx-2 underline cursor-pointer mb-4">Xóa</span>
        <button className="border-2 border-solid border-gray-300 px-3 py-2 ml-5">
          Thiết lập mặc định
        </button>
      </div>
    </div>
  );
}

export default ItemAddress;
