import React from "react";

function StatusBill(props) {
  //
  const { status } = props;
  const Status = () => {
    switch (status) {
      case -1:
        return <span className="text-gray-600 font-semibold flex">ĐÃ HỦY</span>;
      case 0:
        return (
          <span className="text-yellow-600 font-semibold flex">
            CHỜ XÁC NHẬN
          </span>
        );
      case 1:
        return (
          <span className="text-yellow-600 font-semibold flex">
            CHỜ LẤY HÀNG
          </span>
        );
      case 2:
        return (
          <span className="text-yellow-600 font-semibold flex">ĐANG GIAO</span>
        );
      case 3:
        return (
          <span className="text-green-600 font-semibold flex">ĐÃ GIAO</span>
        );
      default:
        return <></>;
    }
  };
  //
  return (
    <>
      <Status />
    </>
  );
}

export default StatusBill;
