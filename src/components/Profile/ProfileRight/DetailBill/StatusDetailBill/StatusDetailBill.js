import React from "react";
import ItemStatusDetailBill from "./ItemStatusDetailBill/ItemStatusDetailBill";

function StatusDetailBill(props) {
  return (
    <>
      <div className="w-full my-5 flex relative">
        <ItemStatusDetailBill
          left={false}
          right={true}
          label={"Đơn hàng đã đặt"}
          statusLineLeft={true}
          statusLineRight={true}
          icon={"fas fa-file-invoice"}
        />
        <ItemStatusDetailBill
          left={true}
          right={true}
          label={"Đã xác nhận thông tin"}
          statusLineLeft={true}
          statusLineRight={false}
          icon={"fas fa-user-check"}
        />
        <ItemStatusDetailBill
          left={true}
          right={true}
          label={"Chờ lấy hàng"}
          statusLineLeft={false}
          statusLineRight={false}
          icon={"fas fa-truck-moving"}
        />
        <ItemStatusDetailBill
          left={true}
          right={true}
          label={"Đang giao"}
          statusLineLeft={false}
          statusLineRight={false}
          icon={"fas fa-shipping-fast"}
        />
        <ItemStatusDetailBill
          left={true}
          right={false}
          label={"Đánh giá"}
          statusLineLeft={false}
          statusLineRight={false}
          icon={"fas fa-star"}
        />
      </div>
      <div className="w-full lg:my-3 flex items-cente text-gray-600 mt-12">
        <div className="w-1/2 flex text-xs items-center">
          Cảm ơn bạn đã mua sắm tại shop
        </div>
        <div className="w-1/2 flex justify-end">
          <button className="px-12 py-2 bg-organce text-white font-semibold">
            Mua lại
          </button>
        </div>
      </div>
    </>
  );
}

export default StatusDetailBill;
