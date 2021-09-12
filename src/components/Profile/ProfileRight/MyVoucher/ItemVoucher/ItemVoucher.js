import React from "react";

function ItemVoucher(props) {
  //
  const { voucher, disabled, full } = props;
  //
  return (
    <div
      className={`m-3 pl-1 h-28 flex shadow-lg item__voucher relative ${
        disabled ? "disabled__voucher" : full ? "w-full" : "item__voucher"
      }`}
    >
      <span
        className="border-2 border-solid border-yellow shadow-sm px-1 -ml-0.5 mb-1 text-xs 
        rounded-full absolute top-2 -left-2 bg-yellow-500 text-white"
      >
        Sắp hết hạn
      </span>
      <div
        className={`w-28 flex text-center text-sm text-white font-semibold items-center 
        ${disabled ? "disabled__voucher__child" : "item__voucher__child"}`}
      >
        {disabled ? (
          <div className="w-full items-center justify-center">
            <img
              src="https://cf.shopee.vn/file/e6a3b7beffa95ca492926978d5235f79"
              alt=""
              className="w-3/5 h-3/5 mx-auto"
            />
          </div>
        ) : (
          "MIỄN PHÍ VẬN CHUYỂN"
        )}
      </div>
      <div className="flex items-center pl-3 ">
        <div className="flex-col flex justify-items-start">
          <span className="mb-1">{voucher.discountCode.nameDiscountCode}</span>
          <span className="w-28 border-2 border-solid border-organce text-organce px-2 -ml-0.5 mb-1 py-0.5 text-xs rounded-full">
            Đơn hàng từ 0đ
          </span>
          <span className="w-full text-sm text-gray-500">
            HSD : {voucher.discountCode.timeExpired}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ItemVoucher;
