import React from "react";
import useInfoWebsite from "../../../../hook/useInfoWebsite";

function InfoContact(props) {
  //
  const info = useInfoWebsite(2);
  //
  return (
    <div className="w-full xl:w-1/3">
      <p className="font-semibold text-3xl mb-2">Thông tin liên hệ</p>
      <p className="text-gray-700 text-xm dark:text-gray-300">
        Công ty cổ phần trực tuyến Hsmart là một trong các đơn vị cung cấp và
        phân phối đồng hồ thông minh số 1 tại Việt Nam.
      </p>
      <p className="text-gray-700 text-xm dark:text-gray-300 mt-8 font-semibold">
        Email : {info ? info ? info.email : "" : ""}
      </p>
      <p className="text-gray-700 text-xm dark:text-gray-300 my-3 font-semibold">
        Số điện thoại : {info ? info ? info.phone : "" : ""}
      </p>
      <p className="text-gray-700 text-xm dark:text-gray-300 my-3 text-justify font-semibold">
        Địa chỉ : {info ? info ? info.address : "" : ""}
      </p>
    </div>
  );
}

export default InfoContact;
