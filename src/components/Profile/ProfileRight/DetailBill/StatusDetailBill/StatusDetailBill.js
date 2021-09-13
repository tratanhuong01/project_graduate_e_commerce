import React, { useEffect } from "react";
import ItemStatusDetailBill from "./ItemStatusDetailBill/ItemStatusDetailBill";

function StatusDetailBill(props) {
  //
  const { bill } = props;
  const generalStatus = () => {
    let pos = -1;
    let arrayStatus = [
      {
        type: 0,
        name: "Đơn hàng đã đặt",
        icon: "fas fa-file-invoice",
        left: false,
        right: true,
        statusLineLeft: true,
        statusLineRight: false,
        time: " ",
        visible: false,
      },
      {
        type: 1,
        name: "Đã xác nhận thông tin",
        icon: "fas fa-user-check",
        left: true,
        right: true,
        statusLineLeft: false,
        statusLineRight: false,
        time: " ",
        visible: false,
      },
      {
        type: 1,
        name: "Chờ lấy hàng",
        icon: "fas fa-truck-moving",
        left: true,
        right: true,
        statusLineLeft: false,
        statusLineRight: false,
        time: false,
        visible: false,
      },
      {
        type: 2,
        name: "Đang giao",
        icon: "fas fa-shipping-fast",
        left: true,
        right: true,
        statusLineLeft: false,
        statusLineRight: false,
        time: false,
        visible: false,
      },
      {
        type: 3,
        name: "Đơn hàng thành công",
        icon: "fas fa-star",
        left: true,
        right: false,
        statusLineLeft: false,
        statusLineRight: false,
        time: " ",
        visible: false,
      },
    ];
    for (let index = 0; index < arrayStatus.length; index++) {
      const element = arrayStatus[index];
      if (element.type === bill.bill.status) pos = index;
    }
    if (pos === 0) {
    } else {
      if (bill.bill.status === -1) {
        arrayStatus[0].visible = true;
        arrayStatus[0].statusLineRight = true;
        arrayStatus[arrayStatus.length - 1].visible = true;
        arrayStatus[arrayStatus.length - 1].statusLineLeft = true;
        arrayStatus[arrayStatus.length - 1].name = "Đơn hàng đã bị hủy";
        arrayStatus[arrayStatus.length - 1].icon = "far fa-times-circle";
      } else
        for (let index = 0; index <= pos; index++) {
          if (index === 0) arrayStatus[index].statusLineRight = true;
          else {
            if (index === pos) arrayStatus[index].statusLineLeft = true;
            else {
              arrayStatus[index].statusLineRight = true;
              arrayStatus[index].statusLineLeft = true;
            }
          }
        }
    }
    return arrayStatus;
  };

  useEffect(() => {}, [bill]);
  //
  return (
    <>
      <div className="w-full my-5 flex relative">
        {generalStatus().map((item, index) => {
          return (
            <ItemStatusDetailBill
              key={index}
              left={item.left}
              right={item.right}
              label={item.name}
              statusLineLeft={item.statusLineLeft}
              statusLineRight={item.statusLineRight}
              icon={item.icon}
              bill={bill}
              visibled={item.visible}
            />
          );
        })}
      </div>
      <div className="w-full lg:my-3 flex items-cente text-gray-600 dark:text-white mt-12">
        <div className="w-1/2 flex text-xs items-center">
          Cảm ơn bạn đã mua sắm tại shop
        </div>
        {bill.bill.status === 3 && (
          <div className="w-1/2 flex justify-end">
            <button className="px-12 py-2 bg-organce text-white font-semibold">
              Mua lại
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default StatusDetailBill;
