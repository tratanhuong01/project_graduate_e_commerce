import React from "react";

function WarningFormAddress(props) {
  return (
    <>
      <hr className="my-3" />
      <p className="text-sm font-semibold text-gray-600 mx-2.5 my-3 flex items-center">
        <i className="fas fa-exclamation-triangle mr-5 text-yellow-500 text-xl"></i>
        Lưu ý : Vui lòng cung cấp chính xác nhất về địa chỉ của bạn để chúng tôi
        có thể giao đến chúng vị trí của bạn . Để tránh mất thời gian của bên
        cửa hàng cũng như thời gian của shipper.
      </p>
    </>
  );
}

export default WarningFormAddress;
